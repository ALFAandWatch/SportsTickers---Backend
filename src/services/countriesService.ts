import { AppDataSource } from '../config/data-source';
import { Country } from '../entities/Country';
import { ICountry } from '../interfaces/ICountry';

export const getCountriesService = async (): Promise<ICountry[]> => {
   const countryRepository = AppDataSource.getRepository(Country);
   const countries = await countryRepository.find();

   return countries;
};
