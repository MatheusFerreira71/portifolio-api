import { Router } from "express";
import ProjectController from "./Project.controller";

const projectRouter = Router();

const projectController = new ProjectController();

projectRouter.get('/project', projectController.buscarTodos);
projectRouter.post('/project', projectController.criarUm);

export default projectRouter;