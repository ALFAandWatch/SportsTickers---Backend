import 'dotenv/config';
import { AppDataSource } from '../config/data-source';
import { Link } from '../entities/Link';

export const preloadLinks = async () => {
   try {
      // Create some links to insert
      const links: Partial<Link>[] = [
         {
            url: 'https://www.laliganacional.com.ar/laliga/',
            league: 'Liga Nacional de Basketball',
            sport: 'basketball',
            countryId: 32,
         },
         {
            url: 'https://www.mlb.com/',
            league: 'MLB',
            sport: 'baseball',
            countryId: 840,
         },
         {
            url: 'https://lnfoficial.com.br/',
            league: 'Liga Nacional de Futsal',
            sport: 'futsal',
            countryId: 76,
         },
         {
            url: 'https://www.asobal.es/',
            league: 'Liga Asobal',
            sport: 'handball',
            countryId: 724,
         },
         {
            url: 'https://chl.ca/',
            league: 'Canadian Hockey League',
            sport: 'ice hockey',
            countryId: 124,
         },
         {
            url: 'https://cbv.com.br/volei-de-quadra/superliga-a-feminina',
            league: 'Superliga - Femenina',
            sport: 'volleyball',
            countryId: 76,
         },
      ];

      // Insert the links into the database
      const linkRepository = AppDataSource.getRepository(Link);
      const insertedLinks = linkRepository.find();
      if ((await insertedLinks).length > 0) {
         console.log('Links already inserted!');
      } else {
         await linkRepository.save(links);
         console.log('Links preloaded successfully!');
      }
   } catch (error) {
      console.error('Error preloading links:', error);
   }
};
