import { afterAll, beforeAll, describe, expectTypeOf, test } from "vitest";
import prisma from "../../../prisma/prisma";
import ProfileServico from "./Profile.servico";
import { Profile } from "@prisma/client";

beforeAll(async () => {
  await prisma.profile.create({
    data: {
      avatar: 'teste',
      celular: '1699999999',
      curriculo: 'teste',
      descricao: 'olá eu sou o Matheus',
      email: 'teste@teste.com',
      github: 'teste.com',
      linkedin: 'teste.com',
      nome: 'Matheus Ferreira'
    }
  });
});

afterAll(async () => {
  const deleteProfiles = prisma.profile.deleteMany();

  await prisma.$transaction([
    deleteProfiles,
  ]);

  await prisma.$disconnect();
});

describe('Testando módulo Perfil', () => {
  test('Deve buscar um usuário', async () => {
    const profileService = new ProfileServico();

    const perfil: Profile = {} as Profile;

    const profile = await profileService.buscarUm('Matheus Ferreira');

    expectTypeOf(profile).toMatchTypeOf(perfil)
  });
});