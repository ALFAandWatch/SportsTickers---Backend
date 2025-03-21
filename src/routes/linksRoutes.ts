import { Router } from 'express';
import { getLinksBySportController } from '../controllers/linksController';

const linksRouter = Router();

linksRouter.get('/', getLinksBySportController.getLinksBySport);

export default linksRouter;
