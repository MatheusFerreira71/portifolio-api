import { Profile } from "@prisma/client";

export interface ProfileRepo {
  buscarUm(nome: string): Promise<Profile | null>;
}

export interface ProfileService {
  buscarUm(nome: string): Promise<Profile>;
}