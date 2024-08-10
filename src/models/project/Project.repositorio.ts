import { Project } from "@prisma/client";
import prisma from "../../prisma";
import { IProjectCreate, IProjectTechCreate, ITechCreate, ProjectRepo } from "./project.interfaces";
import { notInList, removeDuplicados } from "../../utils/utils";

export default class ProjectRepositorio implements ProjectRepo {
  constructor() { }

  public async criarUm(projectBody: IProjectCreate, techsNames: string[]): Promise<Project> {
    return prisma.$transaction<Project>(async tx => {
      try {
        const alreadyExist = await tx.tech.findMany({
          where: {
            nome: { in: techsNames }
          },
          select: { id: true, nome: true }
        });

        const alreadyExistsNames = alreadyExist.map(item => item.nome);

        const itensNovos = notInList<string>(alreadyExistsNames, techsNames);

        const techsData = removeDuplicados(itensNovos).map<ITechCreate>(techName => ({ nome: techName }));

        const techs = await tx.tech.createManyAndReturn({ data: techsData, select: { id: true } });

        const techList = alreadyExist.map(item => item.id).concat(techs.map(item => item.id))

        const project = await tx.project.create({
          data: {
            ...projectBody,
            Techs: {
              createMany: {
                data: techList.map<Omit<IProjectTechCreate, 'projectId'>>(techId => ({ techId }))
              },
            }
          }
        });

        return project;
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
        throw err;
      }
    });
  }

  public async buscarTodos(): Promise<Project[]> {
    const projects = await prisma.project.findMany({ include: { Techs: { include: { Tech: { select: { nome: true } } } } } });

    await prisma.$disconnect();

    return projects;
  }
}