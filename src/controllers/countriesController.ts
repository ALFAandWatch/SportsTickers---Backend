import { Request, Response } from 'express';
import { Repository } from 'typeorm';

import { ICountry } from '../interfaces/ICountry';
import { getCountriesService } from '../services/countriesService';

export const getCountriesController = async (req: Request, res: Response) => {
   const countries: ICountry[] = await getCountriesService();
   res.status(200).json(countries);
};
