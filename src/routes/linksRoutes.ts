import { Router } from 'express';
import { linksController } from '../controllers/linksController';

const linksRouter = Router();

linksRouter.get('/', linksController.getLinksBySport);
linksRouter.post('/', linksController.addNewLink);

export default linksRouter;
