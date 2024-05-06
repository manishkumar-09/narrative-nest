import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// routes structure

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

//token auth middleware

// app.use(async (c, next) => {
//   const header = c.req.header("authorization") || "";
//   if (header && header.startsWith("Bearer")) {
//     const token = header.split(" ")[1];
//     const payload = await verify(token, "missisipi");
//     console.log(payload.userId);
//     if (!payload) {
//       return c.json({ message: "Unauthorized" });
//     }
//     // Set the userId in the context
//     // c.set("userId", payload.id);
//     c.set("userId", payload.Id);
//   } else {
//     c.status(403);
//     return c.json({ message: "token not found" });
//   }
// });

app.get("/", (c) => {
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
