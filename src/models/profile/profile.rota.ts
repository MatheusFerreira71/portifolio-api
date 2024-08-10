import { Router } from "express";
import ProfileController from "./Profile.controller";

const profileRouter = Router();

const profileController = new ProfileController();

profileRouter.get('/profile/one', profileController.buscarUm);

export default profileRouter;