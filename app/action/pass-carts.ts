"use server";
import prisma from "@/lib/db";
import { CartSchema } from "@/schemas";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
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
  if (!passCart) return { error: "Unable to add to cart" };
  return { success: "Successfully added to cart" };
};

const getPassCart = async () => {
  const user = await getSessionUser();
  const userId = user?.id;
  const passCarts = await prisma.passCart.findMany({
    where: {
      user: {
        id: userId,
      },
    },
    include: {
      passType: true,
    },
  });
  return passCarts;
};

const deletePassCart = async (passCartId: string) => {
  const deletedPassCart = await prisma.passCart.delete({
    where: {
      id: passCartId,
    },
  });
  revalidatePath("/user-cart");
};

const updatePassCartChecked = async (passCartId: string) => {
  const passCart = await prisma.passCart.findUnique({
    where: {
      id: passCartId,
    },
  });
  const updatedPassCart = await prisma.passCart.update({
    where: {
      id: passCartId,
    },
    data: {
      cartChecked: !passCart!.cartChecked,
    },
  });
  revalidatePath("/user-cart");
};

const updatePassCartQuantity = async (
  passCartId: string,
  values: z.infer<typeof CartSchema>
) => {
  const validatedFields = CartSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const quantity = validatedFields.data.quantity;
  const user = await getSessionUser();
  const userId = user?.id;
  const passCart = await prisma.passCart.findUnique({
    where: {
      id: passCartId,
      userId: userId,
    },
  });
  if (!passCart) return { error: "Pass not found" };
  const updatedPassCart = await prisma.passCart.update({
    where: {
      id: passCartId,
    },
    data: {
      quantity: quantity,
    },
  });
  if (!updatedPassCart) return { error: "Unable to edit pass" };
  revalidatePath("/user-cart");
  return { success: "Quantity updated successfully" };
};
export {
  createPassCart,
  getPassCart,
  deletePassCart,
  updatePassCartChecked,
  updatePassCartQuantity,
};
