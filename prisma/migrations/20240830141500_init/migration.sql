/*
  Warnings:

  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `passes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[passTypeId]` on the table `passes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[programmeId]` on the table `programme_subscriptions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[trainerId]` on the table `programmes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[authProviderId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `age` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "name",
ADD COLUMN     "authProviderId" TEXT,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ALTER COLUMN "age" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "passes_userId_key" ON "passes"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "passes_passTypeId_key" ON "passes"("passTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "programme_subscriptions_programmeId_key" ON "programme_subscriptions"("programmeId");

-- CreateIndex
CREATE UNIQUE INDEX "programmes_trainerId_key" ON "programmes"("trainerId");

-- CreateIndex
CREATE UNIQUE INDEX "users_authProviderId_key" ON "users"("authProviderId");
