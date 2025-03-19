import { Router } from 'express';
import linksRouter from './linksRoutes';

const router: Router = Router();

router.use('/links', linksRouter);

export default router;
