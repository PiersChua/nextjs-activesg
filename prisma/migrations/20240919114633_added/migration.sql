/*
  Warnings:

  - You are about to drop the column `price` on the `pass_types` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `authProviderId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.
  - Added the required column `priceInCents` to the `pass_types` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "passes_passTypeId_key";

-- DropIndex
DROP INDEX "passes_userId_key";

-- DropIndex
DROP INDEX "programme_subscriptions_programmeId_key";

-- DropIndex
DROP INDEX "programmes_trainerId_key";

-- DropIndex
DROP INDEX "users_authProviderId_key";

-- AlterTable
ALTER TABLE "pass_types" DROP COLUMN "price",
ADD COLUMN     "priceInCents" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "passes" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "age",
DROP COLUMN "authProviderId",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "dateOfBirth" DATE,
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT,
ALTER COLUMN "password" DROP NOT NULL;

-- CreateTable
CREATE TABLE "accounts" (
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("provider","providerAccountId")
);

-- CreateTable
CREATE TABLE "pass_carts" (
    "userId" TEXT NOT NULL,
    "isChecked" BOOLEAN NOT NULL DEFAULT true,
    "quantity" INTEGER NOT NULL,
    "passTypeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pass_carts_pkey" PRIMARY KEY ("userId","passTypeId")
);

-- CreateTable
CREATE TABLE "facilities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "facilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facility_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "facilityId" TEXT NOT NULL,

    CONSTRAINT "facility_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timeslots" (
    "id" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "facilityId" TEXT NOT NULL,

    CONSTRAINT "timeslots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings" (
    "userId" TEXT NOT NULL,
    "timeslotId" TEXT NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("userId","timeslotId")
);

-- CreateIndex
CREATE UNIQUE INDEX "bookings_timeslotId_key" ON "bookings"("timeslotId");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pass_carts" ADD CONSTRAINT "pass_carts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pass_carts" ADD CONSTRAINT "pass_carts_passTypeId_fkey" FOREIGN KEY ("passTypeId") REFERENCES "pass_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facility_categories" ADD CONSTRAINT "facility_categories_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "facilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timeslots" ADD CONSTRAINT "timeslots_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "facilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_timeslotId_fkey" FOREIGN KEY ("timeslotId") REFERENCES "timeslots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
