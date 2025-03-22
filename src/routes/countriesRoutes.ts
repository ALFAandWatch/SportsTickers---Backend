import { Router } from 'express';
import { getCountriesController } from '../controllers/countriesController';

const countriesRouter = Router();

countriesRouter.get('/', getCountriesController);

export default countriesRouter;
