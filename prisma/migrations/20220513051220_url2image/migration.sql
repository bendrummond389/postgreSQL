/*
  Warnings:

  - You are about to drop the column `url` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "url",
ADD COLUMN     "Image" TEXT NOT NULL DEFAULT E'';
