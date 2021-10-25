/*
  Warnings:

  - You are about to drop the column `bandId` on the `Event` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "EventOnCustomers_customerId_key";

-- DropIndex
DROP INDEX "EventOnCustomers_eventId_key";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "bandId";
