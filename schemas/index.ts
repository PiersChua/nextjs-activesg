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
    .int("Must be integer")
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

const BookFacilitySchema = z.object({
  date: z.coerce
    .date()
    .min(
      new Date(new Date().setHours(0, 0, 0, 0)),
      "Cannot book dates before today"
    ),
  startTime: z.string().regex(/^([01]\d|2[0-3]):00$/, {
    message: "Invalid time format. Expected HH:MM.",
  }),
  durationInHours: z.coerce
    .number()
    .int("Must be integer")
    .min(1, "Minimum duration is 1 hour"),
  participantsCount: z.coerce
    .number()
    .int("Must be integer")
    .min(1, "Minimum participant count is 1")
    .max(10, "Maximum participant count is 10"),
  cardNumber: z
    .string()
    .regex(
      /^(?:4\d{3}(?:\s?\d{4}){3}|[25][1-7]\d{2}(?:\s?\d{4}){3}|6(?:011|5\d{2})(?:\s?\d{4}){3}|3[47]\d{2}(?:\s?\d{6}\s?\d{5})|3(?:0[0-5]|[68]\d)(?:\s?\d{4}){3}|(?:2131|1800|35\d{3})(?:\s?\d{4}){3})$/,
      "Invalid card number"
    ),
  cardExpiry: z
    .string()
    .regex(/^(0[1-9]|1[0-2]) \/ \d{2}$/, "Expected format MM / YY"),

  cardCvv: z.string().regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
});

export {
  LoginSchema,
  SignUpSchema,
  ContactSchema,
  ProfileSchema,
  CartSchema,
  SearchFacilitySchema,
  BookFacilitySchema,
};
