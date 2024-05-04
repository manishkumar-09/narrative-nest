import { Hono } from "hono";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blogRouter.get("/all-blogs", async (c) => {
  c.json("blog route");
});

blogRouter.post("/create", (c) => {
  return c.text("Hello Hono!");
});

blogRouter.put("/api/v1/blog/:id", (c) => {
  return c.text("Hello Hono!");
});
