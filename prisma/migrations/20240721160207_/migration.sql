/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Profile_nome_key" ON "Profile"("nome");
