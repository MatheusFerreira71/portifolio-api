import { Router } from 'express';
import profileRouter from './models/profile/profile.rota';
import projectRouter from './models/project/project.rota';

import upload from './config/multer';

const routes = Router();

// Rota de upload de arquivo;
routes.post('/file-upload', upload.single('file'), (req, res) => {
  const { API_URL } = process.env;

  res.status(200).send(`${API_URL}/uploads/${req.file?.filename}`);
});

routes.use('/', profileRouter);
routes.use('/', projectRouter);

export default routes;