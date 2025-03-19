import { Router } from 'express';
import { getLinksBySportController } from '../controllers/linksController';

const linksRouter = Router();

linksRouter.get('/links', getLinksBySportController);

export default linksRouter;
