import { Prisma, Project } from "@prisma/client";


export interface ProjectRepo {
  buscarTodos(): Promise<Project[]>;
  criarUm(projectBody: IProjectCreate, techsNames: string[]): Promise<Project>;
}

export interface ProjectService {
  buscarTodos(): Promise<Project[]>;
  criarUm(projectBody: IProjectCreate, techsNames: string[]): Promise<Project>;
}

export type IProjectCreate = Prisma.ProjectCreateArgs['data'];

export type ITechCreate = Prisma.TechCreateManyInput;

export type IProjectTechCreate = Prisma.ProjectTechCreateManyInput;