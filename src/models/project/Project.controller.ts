import { Request, Response } from "express";
import { ProjectService } from "./project.interfaces";
import ProjectServico from "./Project.servico";

export default class ProjectController {
  private service: ProjectService;

  constructor() {
    this.service = new ProjectServico();
  }

  public buscarTodos = async (req: Request, res: Response): Promise<Response> => {
    const projecs = await this.service.buscarTodos();

    return res.json(projecs);
  }

  public criarUm = async (req: Request, res: Response): Promise<Response> => {
    const { banner, codigo, descricao, preview, titulo, techNames } = req.body;

    const project = await this.service.criarUm({ banner, codigo, descricao, preview, titulo }, techNames);

    return res.json(project);
  }
}