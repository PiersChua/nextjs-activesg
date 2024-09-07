import prisma from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { PassType } from "@prisma/client";

const createPass = async (passType: PassType) => {
  //   const user = await getSessionUser();
  //   const userId = user?.id;
  const pass = await prisma.pass.create({
    data: {
      endDate: new Date(),
      user: {
        connect: {
          id: "cm0rufcal00006l6t1c2q9g7d",
        },
      },
      passType: {
        connect: {
          id: passType.id,
        },
      },
    },
  });
};

export { createPass };
