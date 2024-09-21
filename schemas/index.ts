import { FacilityType, Sport } from "@prisma/client";
import * as z from "zod";

const fileSchema = z.instanceof(File, { message: "Required" });

const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address").toLowerCase(),
  password: z.string().min(1, "Password is required"),
});

const SignUpSchema = z.object({
  name: z
    .string()
    .min(2, "Name is too short")
    .regex(/^[A-Za-z\s]+$/, "Name can only contain letters"),
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
  name: z
    .string()
    .min(2, "Name is too short")
    .regex(/^[A-Za-z\s]+$/, "Name can only contain letters"),
  phone: z
    .string()
    .regex(/^(6|8|9)\d{7}$/, "Please enter a local phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(50, "Message is too short"),
});

const ProfileSchema = z.object({
  name: z
    .string()
    .min(2, "Name is too short")
    .regex(/^[A-Za-z\s]+$/, "Name can only contain letters"),
  dateOfBirth: z.coerce
    .date()
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
      "You must be at least 10 years old"
    ),
  // image: fileSchema.refine((file) => file.size > 0, "Required"),
  email: z.string().email("Please enter a valid email address"),
});

const CartSchema = z.object({
  quantity: z.coerce
    .number()
    .int("Quantity must be integer")
    .gte(1, "Minimum quantity is 1")
    .lte(99, "Maximum quantity is 99"),
});

const SearchFacilitySchema = z.object({
  facilityType: z.nativeEnum(FacilityType, { message: "Invalid facility" }),
  sport: z.nativeEnum(Sport, { message: "Invalid sport" }),
  date: z.coerce
    .date()
    .min(
      new Date(new Date().setHours(0, 0, 0, 0)),
      "Cannot book dates before today"
    ),
  time: z.enum(["Morning", "Afternoon", "Evening", "All"], {
    message: "Invalid time",
  }),
});

export {
  LoginSchema,
  SignUpSchema,
  ContactSchema,
  ProfileSchema,
  CartSchema,
  SearchFacilitySchema,
};
