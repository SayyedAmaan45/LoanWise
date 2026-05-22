import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address"),

  password: z
    .string()
    .min(
      7,
      "Password must be at least 7 characters"
    ),

  captcha: z
    .string()
    .min(
      1,
      "Please enter captcha"
    ),
});