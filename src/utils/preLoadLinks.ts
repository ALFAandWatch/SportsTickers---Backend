import 'dotenv/config';
import { AppDataSource } from '../config/data-source';
import { Link } from '../entities/Link';

export const preloadLinks = async () => {
   try {
      // Create some links to insert
      const links: Partial<Link>[] = [
         {
            url: 'https://link1.com',
            league: 'NBA',
            sport: 'basketball',
            countryId: 4,
         },
         {
            url: 'https://link2.com',
            league: 'NFL',
            sport: 'baseball',
            countryId: 8,
         },
         {
            url: 'https://link3.com',
            league: 'NBA',
            sport: 'baseball',
            countryId: 8,
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
