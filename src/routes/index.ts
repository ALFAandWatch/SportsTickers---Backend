import { Router } from 'express';
import linksRouter from './linksRoutes';
import countriesRouter from './countriesRoutes';

const router: Router = Router();

router.use('/links', linksRouter);
router.use('/countries', countriesRouter);

export default router;
