import { Profile } from "@prisma/client";
import AppError from "../../shared/errors/AppError";
import ProfileRepositorio from "./Profile.repositorio";
import { ProfileRepo } from "./profile.interfaces";


export default class ProfileServico implements ProfileServico {
  private repository: ProfileRepo;

  constructor() {
    this.repository = new ProfileRepositorio();
  }

  public async buscarUm(nome: string): Promise<Profile> {
    const profile = await this.repository.buscarUm(nome);

    if (!profile) {
      throw new AppError('Perfil não encontrado', 404);
    }

    return profile;
  }
}