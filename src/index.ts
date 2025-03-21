import 'dotenv/config';
import { AppDataSource } from './config/data-source';
import server from './server';
import { PORT } from './config/envs';
import { preloadLinks } from './utils/preLoadLinks';
import { preloadCountries } from './utils/preLoadCountries';

const startServer = async () => {
   try {
      await AppDataSource.initialize();

      await preloadCountries();
      await preloadLinks();

      console.log('Database connected!');

      server.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
      });
   } catch (error) {
      console.error('Error during Data Source initialization', error);
   }
};
startServer();
