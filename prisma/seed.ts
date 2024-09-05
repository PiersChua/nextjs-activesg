import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { PassCategory } from "@prisma/client";

const passTypeData: Prisma.PassTypeCreateInput[] = [
  // Day pass
  {
    category: PassCategory.GYM,
    minAge: 12,
    maxAge: 17,
    durationInDays: 1,
    price: 1.5,
  },
  {
    category: PassCategory.GYM,
    minAge: 18,
    maxAge: 54,
    durationInDays: 1,
    price: 2.5,
  },
  {
    category: PassCategory.GYM,
    minAge: 55,
    maxAge: 65,
    durationInDays: 1,
    price: 1.5,
  },
  // Monthly peak pass
  {
    category: PassCategory.GYM,
    minAge: 12,
    maxAge: 17,
    isPeak: true,
    durationInDays: 30,
    price: 18.0,
  },
  {
    category: PassCategory.GYM,
    minAge: 18,
    maxAge: 54,
    isPeak: true,
    durationInDays: 30,
    price: 30.0,
  },
  {
    category: PassCategory.GYM,
    minAge: 55,
    maxAge: 65,
    isPeak: true,
    durationInDays: 30,
    price: 18.0,
  },
  // Monthly non-peak pass
  {
    category: PassCategory.GYM,
    minAge: 12,
    maxAge: 17,
    isPeak: false,
    durationInDays: 30,
    price: 9.0,
  },
  {
    category: PassCategory.GYM,
    minAge: 18,
    maxAge: 54,
    isPeak: false,
    durationInDays: 30,
    price: 15.0,
  },
  {
    category: PassCategory.GYM,
    minAge: 55,
    maxAge: 65,
    isPeak: false,
    durationInDays: 30,
    price: 9.0,
  },
  // Half-yearly peak pass
  {
    category: PassCategory.GYM,
    minAge: 12,
    maxAge: 17,
    isPeak: true,
    durationInDays: 180,
    price: 95.0,
  },
  {
    category: PassCategory.GYM,
    minAge: 18,
    maxAge: 54,
    isPeak: true,
    durationInDays: 180,
    price: 160.0,
  },
  {
    category: PassCategory.GYM,
    minAge: 55,
    maxAge: 65,
    isPeak: true,
    durationInDays: 180,
    price: 95.0,
  },
  // Half-yearly non-peak pass
  {
    category: PassCategory.GYM,
    minAge: 12,
    maxAge: 17,
    isPeak: false,
    durationInDays: 180,
    price: 40.0,
  },
  {
    category: PassCategory.GYM,
    minAge: 18,
    maxAge: 54,
    isPeak: false,
    durationInDays: 180,
    price: 40.0,
  },
  {
    category: PassCategory.GYM,
    minAge: 55,
    maxAge: 65,
    isPeak: false,
    durationInDays: 180,
    price: 40.0,
  },
  // Yearly peak pass
  {
    category: PassCategory.GYM,
    minAge: 12,
    maxAge: 17,
    isPeak: true,
    durationInDays: 360,
    price: 180.0,
  },
  {
    category: PassCategory.GYM,
    minAge: 18,
    maxAge: 54,
    isPeak: true,
    durationInDays: 360,
    price: 300.0,
  },
  {
    category: PassCategory.GYM,
    minAge: 55,
    maxAge: 65,
    isPeak: true,
    durationInDays: 360,
    price: 180.0,
  },
  // Yearly non-peak pass
  {
    category: PassCategory.GYM,
    minAge: 12,
    maxAge: 17,
    isPeak: false,
    durationInDays: 360,
    price: 80.0,
  },
  {
    category: PassCategory.GYM,
    minAge: 18,
    maxAge: 54,
    isPeak: false,
    durationInDays: 360,
    price: 80.0,
  },
  {
    category: PassCategory.GYM,
    minAge: 55,
    maxAge: 65,
    isPeak: false,
    durationInDays: 360,
    price: 80.0,
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
