import { Router } from "express";
import ProfileController from "./Profile.controller";
import ProfileServico from "./Profile.servico";
import ProfileRepositorio from "./Profile.repositorio";

const profileRouter = Router();

const profileController = new ProfileController();

profileRouter.get('/profile/one', profileController.buscarUm);

export default profileRouter;