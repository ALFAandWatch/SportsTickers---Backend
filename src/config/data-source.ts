import { DataSource } from 'typeorm';
import 'dotenv/config';
import { Country } from '../entities/Country';
import { Link } from '../entities/Link';

export const AppDataSource = new DataSource({
   type: 'postgres',
   host: process.env.DB_HOST,
   port: Number(process.env.DB_PORT),
   username: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   entities: [Link, Country],
   // dropSchema: true,
   synchronize: true, // Change to false in production
   logging: ['error'],
   name: 'default',
});

AppDataSource.initialize()
   .then(() => console.log('📦 Database connected!'))
   .catch((err) => console.error('❌ Database connection error:', err));
