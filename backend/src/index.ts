import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
// import authMiddleware from "./middlewares/tokenAuth";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.use(async (c, next) => {
  const header = c.req.header("authorization") || "";
  if (header && header.startsWith("Bearer")) {
    const token = header.split(" ")[1];
    const payload = await verify(token, "missisipi");
    console.log(payload.userId);
    if (!payload) {
      return c.json({ message: "Unauthorized" });
    }
    // Set the userId in the context
    // c.set("userId", payload.id);
    c.set("userId", payload.Id);
  } else {
    c.status(403);
    return c.json({ message: "token not found" });
  }
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});
app.post("/api/v1/signup", async (c) => {
  //env in hono
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

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
});

app.post("/api/v1/signin", async (c) => {
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

  const token = await sign({ Id: user.id }, "missisipi");
  return c.json({ message: "singin successfull", token: token });
});

// app.use(authMiddleware);
app.post("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});
app.get("/api/v1/blog", (c) => {
  return c.json({ message: "token found" });
});
app.put("/api/v1/blog/:id", (c) => {
  return c.text("Hello Hono!");
});

app.delete("/delete", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const user = await prisma.user.deleteMany({
    where: {
      email: "honotest1@gmail.com",
    },
  });
  return c.text("data deleted");
});

export default app;
