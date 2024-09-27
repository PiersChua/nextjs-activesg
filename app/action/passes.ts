"use server";

import prisma from "@/lib/db";
import { getStartAndEndDate } from "@/utils/formatDateTime";
import { getSessionUser } from "@/utils/getAuth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const createPasses = async () => {
  const user = await getSessionUser();
  if (!user) {
    throw new Error("Unauthorized content");
  }
  const checkedPassCarts = await prisma.passCart.findMany({
    where: {
      userId: user.id,
      isChecked: true,
    },
  });
  if (!checkedPassCarts) {
    return { error: "No checked item in cart" };
  }
  const passData = checkedPassCarts.map((cart) => ({
    quantity: cart.quantity,
    userId: cart.userId,
    passTypeId: cart.passTypeId,
  }));
  const passes = await prisma.pass.createMany({
    data: passData,
  });
  const deletedPassCarts = await prisma.passCart.deleteMany({
    where: {
      userId: user.id,
      isChecked: true,
    },
  });
  return { success: "Passes purchased. View them under Profile" };
};
const getPasses = async () => {
  const user = await getSessionUser();
  if (!user) {
    throw new Error("Unauthorized content");
  }
  const passes = await prisma.pass.findMany({
    where: {
      user: {
        id: user.id,
      },
    },
    include: {
      passType: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return passes;
};
const activatePass = async (passId: string) => {
  const user = await getSessionUser();
  if (!user) {
    throw new Error("Unauthorized content");
  }
  const userPass = await prisma.pass.findUnique({
    where: { id: passId },
    include: { passType: true },
  });
  if (!userPass) {
    return { error: "Pass type not found" };
  }
  const newQuantity = userPass.quantity - 1;
  if (newQuantity === 0) {
    const deletedPass = await prisma.pass.delete({ where: { id: passId } });
  } else {
    const updatedPasses = await prisma.pass.update({
      where: { id: passId },
      data: {
        quantity: {
          decrement: 1,
        },
      },
    });
  }
  const { currentDateSG, endDateUTC } = getStartAndEndDate(
    userPass.passType.durationInDays
  );
  const activatedPass = await prisma.pass.create({
    data: {
      isActive: true,
      startDate: currentDateSG,
      endDate: endDateUTC,
      quantity: 1,
      user: {
        connect: {
          id: userPass.userId,
        },
      },
      passType: {
        connect: {
          id: userPass.passType.id,
        },
      },
    },
  });
  redirect("/user-profile/passes");
};

export { createPasses, getPasses, activatePass };
