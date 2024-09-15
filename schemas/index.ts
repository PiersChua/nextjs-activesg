import * as z from "zod";

const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address").toLowerCase(),
  password: z.string().min(1, "Password is required"),
});

const SignUpSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  dateOfBirth: z.coerce
    .date()
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
      "You must be at least 10 years old"
    ),
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

const ProfileSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  dateOfBirth: z.coerce
    .date()
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
      "You must be at least 10 years old"
    ),
  email: z.string().email("Please enter a valid email address"),
});

const CartSchema = z.object({
  quantity: z.coerce
    .number()
    .gte(1, "Minimum quantity is 1")
    .lte(10, "Maximum quantity is 10"),
});

export { LoginSchema, SignUpSchema, ContactSchema, ProfileSchema, CartSchema };
