import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../config/data-source';
import { Link } from '../entities/Link'; // Adjust the path based on your folder structure
import { addLinkService } from '../services/linksService';

export const linksController = {
   getLinksBySport: async (req: Request, res: Response) => {
      const { sport } = req.query;

      if (typeof sport !== 'string') {
         return res
            .status(400)
            .json({ message: 'Sport parameter must be a string.' });
      }

      // Get the repository for the Link entity
      const linkRepository: Repository<Link> =
         AppDataSource.getRepository(Link);

      try {
         // Fetch the links from the database where the sport matches the query
         const filteredLinks = await linkRepository.find({
            where: { sport: sport },
            relations: { country: true },
         });

         if (filteredLinks.length === 0) {
            return res
               .status(404)
               .json({ message: 'No links found for the given sport.' });
         }

         // Send the filtered links as the response
         res.json(filteredLinks);
      } catch (error) {
         return res.status(500).json({ message: 'Server error.' });
      }
   },
   addNewLink: async (req: Request, res: Response) => {
      try {
         const { url, league, sport, countryId } = req.body;
         const newLink = await addLinkService({
            url,
            league,
            sport,
            countryId,
         });
         res.status(201).json({
            message: 'Se ha añadido el nuevo link exitosamente!',
            data: newLink,
         });
      } catch (error) {
         res.status(400).json({
            message: 'Error al añadir el nuevo link.',
            error,
         });
      }
   },
};
