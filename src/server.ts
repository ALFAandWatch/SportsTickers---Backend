import express from 'express';
import router from './routes/index';
import morgan from 'morgan';
import cors from 'cors';

const server = express();

server.use(morgan('dev'));
server.use(express.json());

server.use(
   cors({
      origin: 'https://sport-tickers-j9k5.vercel.app/',
      credentials: true,
   })
);

server.use(router);

export default server;
