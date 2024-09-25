"use server";
import prisma from "@/lib/db";
import { getSessionUser } from "@/utils/getAuth";
import { FacilityType, Sport } from "@prisma/client";
import { revalidatePath } from "next/cache";
import * as z from "zod";

const getFacilities = async (facility: FacilityType, sport?: Sport) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // revalidatePath(`/facilities/${facility}`); // shows skeleton for a split second only
  const user = await getSessionUser();
  if (!user) {
    throw new Error("Unauthorized content");
  }
  const data = await prisma.facility.findMany({
    where: {
      type: facility,
      ...(sport ? { sports: { has: sport } } : {}),
    },
    include: {
      facilitySlots: true,
    },
  });
  return data;
};

const getFacility = async (id: string) => {
  const user = await getSessionUser();
  if (!user) {
    throw new Error("Unauthorized content");
  }
  const data = await prisma.facility.findUnique({
    where: {
      id: id,
    },
    include: {
      facilitySlots: true,
      facilityHours: true,
    },
  });
  return data;
};

export { getFacilities, getFacility };
