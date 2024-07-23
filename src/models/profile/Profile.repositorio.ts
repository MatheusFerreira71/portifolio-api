import prisma from "../../../prisma/prisma";
import { Profile } from "@prisma/client";

export default class ProfileRepositorio implements ProfileRepositorio {
  constructor() { }

  public async buscarUm(nome: string): Promise<Profile | null> {
    const profile = await prisma.profile.findUnique({ where: { nome } });

    await prisma.$disconnect();

    return profile;
  }
}