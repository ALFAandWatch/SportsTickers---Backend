import { DataSource } from 'typeorm';
import 'dotenv/config';
import { Country } from '../entities/Country';
import { Link } from '../entities/Link';

export const AppDataSource = new DataSource({
   type: 'postgres',
   url: process.env.DATABASE_URL, // Usa DATABASE_URL directamente
   entities: [Link, Country],
   synchronize: true, // Cambia a false en producción y usa migrations
   logging: ['error'],
   ssl:
      process.env.NODE_ENV === 'production'
         ? { rejectUnauthorized: false }
         : false, // Soporte SSL en producción
   name: 'default',
});

AppDataSource.initialize()
   .then(() => console.log('📦 Database connected!'))
   .catch((err) => console.error('❌ Database connection error:', err));
