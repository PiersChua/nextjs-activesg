import prisma from "@/lib/db";
import { getSessionUser } from "@/utils/getAuth";
import { PassCategory, PassType } from "@prisma/client";
import { redirect } from "next/navigation";

const getPassTypes = async (category: PassCategory) => {
  const user = await getSessionUser();
  if (!user) {
    throw new Error("Unauthorized content");
  }
  const age = user.age;
  if (!age) {
    redirect("/user-profile");
  }
  const data = await prisma.passType.findMany({
    where: {
      category: category,
      minAge: { lte: age },
      maxAge: { gte: age },
    },
  });
  const sortByPrice = (arr: PassType[]) =>
    arr.sort((a, b) => a.priceInCents - b.priceInCents);
  const dayPasses = data.filter((item) => item.durationInDays === 1);
  const monthPasses = data.filter((item) => item.durationInDays > 1);
  const peakPasses = monthPasses.filter((item) => item.isPeak);
  const nonPeakPasses = monthPasses.filter((item) => !item.isPeak);
  return {
    dayPasses: sortByPrice(dayPasses),
    peakPasses: sortByPrice(peakPasses),
    nonPeakPasses: sortByPrice(nonPeakPasses),
  };
};

export { getPassTypes };
