import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
 phone: z.string().min(10, "Phone number must be at least 6 digits"),

  country : z.string().min(1, "country is required")
});

