/*
  Warnings:

  - You are about to drop the column `slots` on the `programmes` table. All the data in the column will be lost.
  - Added the required column `description` to the `programmes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `programmes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `programmes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxParticipants` to the `programmes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `programmes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "programmes" DROP COLUMN "slots",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "maxParticipants" INTEGER NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;
