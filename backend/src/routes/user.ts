import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

//sign up

userRouter.post("/signup", async (c) => {
  //env in hono
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body = await c.req.json();
    const user = await prisma.user.findUnique({ where: { email: body.email } });
    if (user)
      return c.json({ success: false, message: "Email already registerd" });

    const response = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    return c.json({ message: "signed up success" });
  } catch (err) {
    c.status(500);
    return c.json({ message: `Error occured ${err}` });
  }
});

// sign in

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });
  if (!user) {
    c.status(403);
    return c.json({ message: "wrong credentials" });
  }

  const token = await sign({ Id: user.id }, c.env.JWT_SECRET);
  return c.json({ message: "singin successfull", token: token });
});
