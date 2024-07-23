import { Router } from 'express';
import profileRouter from './models/profile/Profile.rota';

const routes = Router();

routes.use('/', profileRouter);

export default routes;