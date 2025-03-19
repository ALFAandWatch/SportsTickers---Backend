import server from './server';
import { PORT } from './config/envs';
import 'reflect-metadata';
import { AppDataSource } from './config/data-source';

AppDataSource.initialize()
   .then((res) => {
      console.log('Conexión a la base de datos realizada con éxito!');
      server.listen(PORT, () => {
         console.log(`* * Server is Listening on port ${PORT}! * *`);
      });
   })
   .catch((Error) => {
      console.log(`Error al conectarse a la Base de Datos: ${Error}`);
   });
