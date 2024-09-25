"use server";

import prisma from "@/lib/db";
import { getSessionUser } from "@/utils/getAuth";
import { revalidatePath } from "next/cache";

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
  return { success: "Passes created successfully" };
  // const [passType, user] = await Promise.all([
  //   prisma.passType.findUnique({
  //     where: {
  //       id: passTypeId,
  //     },
  //   }),
  //   getSessionUser(),
  // ]);
  // const userId = user?.id;
  // const currentDateUTC = new Date();
  // const currentDateSG = new Date(currentDateUTC.getTime() + 8 * 60 * 60 * 1000);
  // const endDateUTC = new Date();
  // endDateUTC.setDate(currentDateSG.getDate() + passType!.durationInDays - 1); // include today
  // // Set the end time to midnight Singapore time
  // // setHours sets the local time (SG - UTC+8), which automatically converts to UTC
  // endDateUTC.setHours(23, 59, 59, 999);
  // const pass = await prisma.pass.create({
  //   data: {
  //     endDate: endDateUTC,
  //     user: {
  //       connect: {
  //         id: userId,
  //       },
  //     },
  //     passType: {
  //       connect: {
  //         id: passType!.id,
  //       },
  //     },
  //   },
  // });
};

const activePass = (passId: string) => {};

export { createPasses };
