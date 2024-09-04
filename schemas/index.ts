import * as z from "zod";

const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address").toLowerCase(),
  password: z.string().min(1, "Password is required"),
});

const SignUpSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  age: z.coerce.number().gte(10, "Age must be at least 10"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .regex(/^\S*$/, "Password cannot contain spaces")
    .min(8, "Password must be at least 8 characters"),
});

const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  phone: z
    .string()
    .regex(/^(6|8|9)\d{7}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(50, "Message is too short"),
});

export { LoginSchema, SignUpSchema, ContactSchema };
