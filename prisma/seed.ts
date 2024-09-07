import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { PassCategory } from "@prisma/client";

const passTypeData: Prisma.PassTypeCreateInput[] = [
  /* GYM */
  // Day pass
  {
    category: PassCategory.GYM,
    minAge: 12,
    maxAge: 17,
    durationInDays: 1,
    priceInCents: 150,
  },
  {
    category: PassCategory.GYM,
    minAge: 18,
    maxAge: 54,
    durationInDays: 1,
    priceInCents: 250,
  },
  {
    category: PassCategory.GYM,
    minAge: 55,
    maxAge: 65,
    durationInDays: 1,
    priceInCents: 150,
  },
  // Monthly peak pass
  {
    category: PassCategory.GYM,
    minAge: 12,
    maxAge: 17,
    isPeak: true,
    durationInDays: 30,
    priceInCents: 1800,
  },
  {
    category: PassCategory.GYM,
    minAge: 18,
    maxAge: 54,
    isPeak: true,
    durationInDays: 30,
    priceInCents: 3000,
  },
  {
    category: PassCategory.GYM,
    minAge: 55,
    maxAge: 65,
    isPeak: true,
    durationInDays: 30,
    priceInCents: 1800,
  },
  // Monthly non-peak pass
  {
    category: PassCategory.GYM,
    minAge: 12,
    maxAge: 17,
    isPeak: false,
    durationInDays: 30,
    priceInCents: 900,
  },
  {
    category: PassCategory.GYM,
    minAge: 18,
    maxAge: 54,
    isPeak: false,
    durationInDays: 30,
    priceInCents: 1500,
  },
  {
    category: PassCategory.GYM,
    minAge: 55,
    maxAge: 65,
    isPeak: false,
    durationInDays: 30,
    priceInCents: 900,
  },
  // Half-yearly peak pass
  {
    category: PassCategory.GYM,
    minAge: 12,
    maxAge: 17,
    isPeak: true,
    durationInDays: 180,
    priceInCents: 9500,
  },
  {
    category: PassCategory.GYM,
    minAge: 18,
    maxAge: 54,
    isPeak: true,
    durationInDays: 180,
    priceInCents: 16000,
  },
  {
    category: PassCategory.GYM,
    minAge: 55,
    maxAge: 65,
    isPeak: true,
    durationInDays: 180,
    priceInCents: 9500,
  },
  // Half-yearly non-peak pass
  {
    category: PassCategory.GYM,
    minAge: 12,
    maxAge: 17,
    isPeak: false,
    durationInDays: 180,
    priceInCents: 4000,
  },
  {
    category: PassCategory.GYM,
    minAge: 18,
    maxAge: 54,
    isPeak: false,
    durationInDays: 180,
    priceInCents: 4000,
  },
  {
    category: PassCategory.GYM,
    minAge: 55,
    maxAge: 65,
    isPeak: false,
    durationInDays: 180,
    priceInCents: 4000,
  },
  // Yearly peak pass
  {
    category: PassCategory.GYM,
    minAge: 12,
    maxAge: 17,
    isPeak: true,
    durationInDays: 360,
    priceInCents: 18000,
  },
  {
    category: PassCategory.GYM,
    minAge: 18,
    maxAge: 54,
    isPeak: true,
    durationInDays: 360,
    priceInCents: 30000,
  },
  {
    category: PassCategory.GYM,
    minAge: 55,
    maxAge: 65,
    isPeak: true,
    durationInDays: 360,
    priceInCents: 18000,
  },
  // Yearly non-peak pass
  {
    category: PassCategory.GYM,
    minAge: 12,
    maxAge: 17,
    isPeak: false,
    durationInDays: 360,
    priceInCents: 8000,
  },
  {
    category: PassCategory.GYM,
    minAge: 18,
    maxAge: 54,
    isPeak: false,
    durationInDays: 360,
    priceInCents: 8000,
  },
  {
    category: PassCategory.GYM,
    minAge: 55,
    maxAge: 65,
    isPeak: false,
    durationInDays: 360,
    priceInCents: 8000,
  },
  /* SWIM */
  // Day pass
  {
    category: PassCategory.SWIM,
    minAge: 12,
    maxAge: 17,
    durationInDays: 1,
    priceInCents: 60,
  },
  {
    category: PassCategory.SWIM,
    minAge: 18,
    maxAge: 54,
    durationInDays: 1,
    priceInCents: 130,
  },
  {
    category: PassCategory.SWIM,
    minAge: 55,
    maxAge: 65,
    durationInDays: 1,
    priceInCents: 60,
  },
  // Monthly pass
  {
    category: PassCategory.SWIM,
    minAge: 12,
    maxAge: 17,
    isPeak: true,
    durationInDays: 30,
    priceInCents: 500,
  },
  {
    category: PassCategory.SWIM,
    minAge: 18,
    maxAge: 54,
    isPeak: true,
    durationInDays: 30,
    priceInCents: 1000,
  },
  {
    category: PassCategory.SWIM,
    minAge: 55,
    maxAge: 65,
    isPeak: true,
    durationInDays: 30,
    priceInCents: 500,
  },
  // Yearly pass
  {
    category: PassCategory.SWIM,
    minAge: 12,
    maxAge: 17,
    isPeak: true,
    durationInDays: 360,
    priceInCents: 5000,
  },
  {
    category: PassCategory.SWIM,
    minAge: 18,
    maxAge: 54,
    isPeak: true,
    durationInDays: 360,
    priceInCents: 10000,
  },
  {
    category: PassCategory.SWIM,
    minAge: 55,
    maxAge: 65,
    isPeak: true,
    durationInDays: 360,
    priceInCents: 5000,
  },
];

// const programmeData: Prisma.ProgrammeCreateInput = [
//   {
//     name: "Abs, Buns And Thighs",
//     Dates: [],
//     description:
//       "This workout is targeting on your lower body, abdominal, butt and thigh. It helps to tone and strengthen muscles and get shape in your lower body. It is a low impact training course using equipment like resistance bands.",
//     price: 70.0,
//     venue: "Jurong East Sport Centre",
//     location: "21 Jurong East Street 31 Singapore 609517",
//     startTime: "",
//     endTime: "",
//     maxParticipants: 20,
//     trainerId: "",
//   },
//   {
//     name: "ActiveSG Basketball Academy Season 3 2024 (11-14 yo) and (8-10 yo) Group B @ Pasir Ris (A&C)",
//     Dates: [],
//     description:
//       "Pick up fundamental basketball skills with ActiveSG Basketball Academy! Only for children born from 2010-2016. Only ineligible participants, or injury/illness causing participant to miss half of the programme will be refunded. Join telegram channel for updates: https://t.me/abapsr",
//     price: 130.0,
//     venue: "Pasir Ris Sport Hall",
//     location: "120 Pasir Ris Central Pasir Ris Sport Centre Singapore 519640",
//     startTime: "",
//     endTime: "",
//     maxParticipants: 20,
//     trainerId: "",
//   },
// ];

async function main() {
  for (const data of passTypeData) {
    const user = await prisma.passType.create({
      data: data,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
