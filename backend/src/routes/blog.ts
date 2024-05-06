import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { addBlogInput } from "@manish_dev/narrative-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

// middleware auth function

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
  try {
    const token = authHeader?.split(" ")[1];
    if (!token) {
      c.status(401);
      return c.json({ message: "Unauthorized" });
    }
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload) {
      c.status(403);
      return c.json({ message: "Unauthorized" });
    }
    c.set("userId", payload.Id);
    await next();
  } catch (err) {
    c.status(411);
    return c.json({ message: "User not logged in" });
  }
});

// adding or creating blog
blogRouter.post("/add-blog", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const { success } = addBlogInput.safeParse(body);
    if (!success) {
      c.status(411);
      return c.json({ message: "Inputs are not correct" });
    }
    const userId = c.get("userId");
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    return c.json({ message: "Blog added", blog: blog });
  } catch (err) {
    c.status(500);
    return c.json({ message: "error occured", err });
  }
});

//get all blogs also need to add paginations

blogRouter.get("/get-blogs", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blogs = await prisma.post.findMany({});
    return c.json({ message: "Blog added", blogs: blogs });
  } catch (err) {
    c.status(500);
    return c.json({ message: "error occured", err });
  }
});

// fetch one specific blog

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const id = c.req.param("id");
    const blog = await prisma.post.findFirst({
      where: {
        id: id,
      },
    });
    c.status(200);
    return c.json({ message: "data fetched", blog: blog });
  } catch (err) {
    c.status(500);
    return c.json({ message: "error occured", err });
  }
});

//Update blog

blogRouter.put("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const { success } = addBlogInput.safeParse(body);
    if (!success) {
      c.status(411);
      return c.json({ message: "Inputs are not correct" });
    }
    const id = c.req.param("id");
    const blog = await prisma.post.update({
      where: {
        id: id,
      },
      data: body,
    });
    return c.json({ message: "Blog added", blog: blog });
  } catch (err) {
    c.status(500);
    return c.json({ message: "error occured", err });
  }
});
