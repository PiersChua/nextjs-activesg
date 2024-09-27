"use server";
import prisma from "@/lib/db";
import { CartSchema } from "@/schemas";
import { getSessionUser } from "@/utils/getAuth";
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
  if (!user) {
    throw new Error("Unauthorized content");
  }
  const userId = user?.id;
  const upsertPassCart = await prisma.passCart.upsert({
    where: {
      userId_passTypeId: {
        userId: userId!,
        passTypeId: passTypeId,
      },
    },
    update: {
      quantity: {
        increment: quantity,
      },
    },
    create: {
      user: {
        connect: {
          id: userId!,
        },
      },
      passType: {
        connect: {
          id: passTypeId,
        },
      },
      quantity: quantity,
    },
  });
  if (!upsertPassCart) return { error: "Unable to add to cart" };
  return { success: "Successfully added to cart" };
};

const getPassCarts = async () => {
  const user = await getSessionUser();
  if (!user) {
    throw new Error("Unauthorized content");
  }
  const userId = user.id;
  const passCarts = await prisma.passCart.findMany({
    where: {
      user: {
        id: userId,
      },
    },
    include: {
      passType: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return passCarts;
};

const deletePassCart = async (passTypeId: string) => {
  const user = await getSessionUser();
  if (!user) {
    throw new Error("Unauthorized content");
  }
  const userId = user.id;
  const deletedPassCart = await prisma.passCart.delete({
    where: {
      userId_passTypeId: {
        userId: userId!,
        passTypeId: passTypeId,
      },
    },
  });
  revalidatePath("/user-cart");
};

const updatePassCartChecked = async (passTypeId: string) => {
  const user = await getSessionUser();
  if (!user) {
    throw new Error("Unauthorized content");
  }
  const userId = user.id;
  const passCart = await prisma.passCart.findUnique({
    where: {
      userId_passTypeId: {
        userId: userId!,
        passTypeId: passTypeId,
      },
    },
  });
  const updatedPassCart = await prisma.passCart.update({
    where: {
      userId_passTypeId: {
        userId: userId!,
        passTypeId: passTypeId,
      },
    },
    data: {
      isChecked: !passCart!.isChecked,
    },
  });
  revalidatePath("/user-cart");
};

const updateAllPassCartChecked = async (isChecked: boolean) => {
  const user = await getSessionUser();
  if (!user) {
    throw new Error("Unauthorized content");
  }
  const passCart = await prisma.passCart.updateMany({
    data: {
      isChecked: !isChecked,
    },
  });
  revalidatePath("/user-cart");
};

const updatePassCartQuantity = async (
  passTypeId: string,
  values: z.infer<typeof CartSchema>
) => {
  const validatedFields = CartSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const quantity = validatedFields.data.quantity;
  const user = await getSessionUser();
  if (!user) {
    throw new Error("Unauthorized content");
  }
  const userId = user.id;
  const passCart = await prisma.passCart.findUnique({
    where: {
      userId_passTypeId: {
        userId: userId!,
        passTypeId: passTypeId,
      },
    },
  });
  if (!passCart) return { error: "Pass not found" };
  const updatedPassCart = await prisma.passCart.update({
    where: {
      userId_passTypeId: {
        userId: userId!,
        passTypeId: passTypeId,
      },
    },
    data: {
      quantity: quantity,
    },
  });
  if (!updatedPassCart) return { error: "Unable to edit pass" };
  return { success: "Quantity updated successfully" };
};
export {
  createPassCart,
  getPassCarts,
  deletePassCart,
  updatePassCartChecked,
  updateAllPassCartChecked,
  updatePassCartQuantity,
};
