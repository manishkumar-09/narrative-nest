import z from "zod";

export const signupInput = z.object({
  name: z.string().optional().default("Anonymous"),
  email: z.string().email(),
  password: z.string().min(6),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const addBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});
export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type AddBlogInput = z.infer<typeof addBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
