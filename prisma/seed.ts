import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { PassCategory, FacilityType, Sport } from "@prisma/client";

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

const facilityData: Prisma.FacilityCreateInput[] = [
  // HALLS
  {
    name: "Fernvale Primary School Hall",
    description: "Primary School near Seletar Mall",
    location: "1 Fernvale Lane, Singapore 797701",
    sports: [Sport.BADMINTON, Sport.BASKETBALL],
    type: FacilityType.HALL,
  },
  {
    name: "Yio Chu Kang Sports Hall",
    description:
      "Yio Chu Kang Sport Hall is a public sport hall with 6 badminton Courts & Table Tennis Academy",
    location: "214 Ang Mo Kio Avenue 9, Singapore 569780",
    sports: [Sport.BADMINTON, Sport.TABLE_TENNIS],
    type: FacilityType.HALL,
  },
  {
    name: "Presbyterian High School",
    description:
      "Co-educational government-aided Presbyterian secondary school in Ang Mo Kio",
    location: "5209 Ang Mo Kio Ave 6, Singapore 569845",
    sports: [Sport.BADMINTON, Sport.BASKETBALL],
    type: FacilityType.HALL,
  },

  // COURTS
  {
    name: "Yio Chu Kang Community Centre",
    description: "Community Centre in Singapore",
    location: "1 Fernvale Lane, Singapore 797701",
    sports: [Sport.BADMINTON],
    type: FacilityType.COURT,
  },
  {
    name: "Tampines Sports Hall",
    description:
      "A multi-purpose sports hall with basketball and badminton courts.",
    location: "10 Tampines Central 1, Singapore 529536",
    sports: [Sport.BASKETBALL, Sport.BADMINTON],
    type: FacilityType.COURT,
  },
  {
    name: "Kallang Indoor Stadium",
    description:
      "Indoor stadium for various sports including basketball and badminton.",
    location: "5 Stadium Walk, Singapore 397693",
    sports: [Sport.BASKETBALL, Sport.BADMINTON],
    type: FacilityType.COURT,
  },

  // ROOMS
  {
    name: "Table Tennis Room",
    description: "Room dedicated for table tennis practice and events.",
    location: "123 Table Tennis Ave, Singapore 123456",
    sports: [Sport.TABLE_TENNIS],
    type: FacilityType.ROOM,
  },
  {
    name: "Badminton Training Room",
    description: "Room for badminton training and strategy sessions.",
    location: "45 Badminton Lane, Singapore 654321",
    sports: [Sport.BADMINTON],
    type: FacilityType.ROOM,
  },
  {
    name: "Dance and Movement Room",
    description: "A studio equipped for dance classes and movement practices.",
    location: "12 Dance St, Singapore 112233",
    sports: [Sport.HOCKEY], // Example sport related to movement
    type: FacilityType.ROOM,
  },

  // STUDIOS
  {
    name: "Badminton Training Studio",
    description: "A specialized studio for badminton training.",
    location: "321 Sport Ave, Singapore 987654",
    sports: [Sport.BADMINTON],
    type: FacilityType.STUDIO,
  },
  {
    name: "Basketball Shooting Studio",
    description: "A studio equipped for basketball shooting practice.",
    location: "456 Hoop Rd, Singapore 876543",
    sports: [Sport.BASKETBALL],
    type: FacilityType.STUDIO,
  },
  {
    name: "Tennis Practice Studio",
    description: "Indoor facility for tennis practice.",
    location: "789 Racket St, Singapore 765432",
    sports: [Sport.TENNIS],
    type: FacilityType.STUDIO,
  },

  // OUTDOOR
  {
    name: "Central Park Basketball Court",
    description: "Outdoor basketball court for public use.",
    location: "1 Park Ave, Singapore 111111",
    sports: [Sport.BASKETBALL],
    type: FacilityType.OUTDOOR,
  },
  {
    name: "Fernvale Badminton Court",
    description: "Outdoor badminton court in a community park.",
    location: "222 Fernvale Lane, Singapore 222222",
    sports: [Sport.BADMINTON],
    type: FacilityType.OUTDOOR,
  },
  {
    name: "Outdoor Football Field",
    description: "Open field for football games.",
    location: "333 Football Rd, Singapore 333333",
    sports: [Sport.FOOTBALL],
    type: FacilityType.OUTDOOR,
  },
];

async function main() {
  for (const data of passTypeData) {
    const user = await prisma.passType.create({
      data: data,
    });
  }
  for (const data of facilityData) {
    const facility = await prisma.facility.create({
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
