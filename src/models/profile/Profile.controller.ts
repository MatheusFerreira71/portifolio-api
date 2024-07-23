import { Request, Response } from "express";
import ProfileServico from "./Profile.servico";
import { ProfileService } from "./profile.interfaces";

export default class ProfileController {
  private service: ProfileService;

  constructor() {
    this.service = new ProfileServico();
  }


  public buscarUm = async (req: Request, res: Response): Promise<Response> => {
    const { nome } = req.query;

    const profile = await this.service.buscarUm(String(nome));

    return res.json(profile);
  }
}