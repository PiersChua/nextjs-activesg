"use server";
import prisma from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { FacilityType, Sport } from "@prisma/client";
import { revalidatePath } from "next/cache";
import * as z from "zod";

const getFacilities = async (facility: FacilityType, sport?: Sport) => {
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
