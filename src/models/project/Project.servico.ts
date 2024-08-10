import { Project } from "@prisma/client";
import { IProjectCreate, ProjectRepo, ProjectService } from "./project.interfaces";
import ProjectRepositorio from "./Project.repositorio";
import AppError from "../../shared/errors/AppError";

export default class ProjectServico implements ProjectService {
  private repository: ProjectRepo;

  constructor() {
    this.repository = new ProjectRepositorio();
  }

  public async criarUm(projectBody: IProjectCreate, techsNames: string[]): Promise<Project> {
    const project = await this.repository.criarUm(projectBody, techsNames);

    if (!techsNames.length) {
      throw new AppError('Pelo menos uma tecnologia deve ser informada');
    }

    return project;
  }

  public async buscarTodos(): Promise<Project[]> {
    const projects = await this.repository.buscarTodos();

    return projects;
  }
}