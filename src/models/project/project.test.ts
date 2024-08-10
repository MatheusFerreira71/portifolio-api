import { afterAll, describe, expect, expectTypeOf, test } from "vitest";
import prisma from "../../prisma";
import ProjectServico from "./Project.servico";
import { IProjectCreate } from "./project.interfaces";
import { Project } from "@prisma/client";

afterAll(async () => {
  const deleteTechs = prisma.project.deleteMany();
  const deleteProjectTechs = prisma.projectTech.deleteMany();
  const deleteProfiles = prisma.project.deleteMany();

  await prisma.$transaction([
    deleteProjectTechs,
    deleteTechs,
    deleteProfiles,
  ]);

  await prisma.$disconnect();
});

describe('Testando módulo Projeto', () => {
  test('Deve criar um Projeto', async () => {
    const projectService = new ProjectServico();

    const projeto: IProjectCreate = {} as IProjectCreate;

    const project = await projectService.criarUm({
      banner: 'Teste',
      codigo: 'teste',
      descricao: 'teste',
      preview: 'teste',
      titulo: 'Teste'
    }, ['React', 'Node', 'SQL', 'HTML']);

    expectTypeOf(project).toMatchTypeOf(projeto);
  });

  test('Deve criar apenas as techs que não existem no banco', async () => {
    const projectService = new ProjectServico();

    await projectService.criarUm({
      banner: 'Teste 2',
      codigo: 'teste 2',
      descricao: 'teste 2',
      preview: 'teste 2',
      titulo: 'Teste 2'
    }, ['PHP', 'SQL']);

    const contagemSql = await prisma.tech.count({ where: { nome: 'SQL' } });

    expect(contagemSql).toBe(1);
  })

  test('Deve buscar todos os Projetos', async () => {
    const projectService = new ProjectServico();

    const projects = await projectService.buscarTodos();

    expect(projects).toBeInstanceOf(Array<Project>);
  });
});