"use server";
import prisma from "@/lib/db";
import { CartSchema } from "@/schemas";
import { getSessionUser } from "@/utils/getSessionUser";
import { redirect } from "next/navigation";
import * as z from "zod";

const createPassCart = async (
  passTypeId: string,
  values: z.infer<typeof CartSchema>
) => {
  const validatedFields = CartSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const quantity = validatedFields.data.quantity;
  const [passType, user] = await Promise.all([
    prisma.passType.findUnique({
      where: {
        id: passTypeId,
      },
    }),
    getSessionUser(),
  ]);
  if (!passType) {
    return { error: "Pass type not found" };
  }
  const userId = user?.id;
  const passCart = await prisma.passCart.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      passType: {
        connect: {
          id: passTypeId,
        },
      },
      quantity,
    },
  });
  return { success: "Successfully added to cart" };
};

export { createPassCart };
