import { Router } from 'express';
import { getLinksBySportController } from '../controllers/linksController';

const linksRouter = Router();

linksRouter.get('/links', getLinksBySportController);
// linksRouter.post('/links', addLinkService);

export default linksRouter;
