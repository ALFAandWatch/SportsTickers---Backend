import { Request, Response } from 'express';
import * as linksService from '../services/linksService';

// import { getLinkBySportService } from '../services/linksService';

export const getLinksBySportController = async (
   req: Request,
   res: Response
) => {
   const sport = req.params.sport; // ✅ Use req.params instead of req.query

   if (!sport) {
      return res.status(400).json({ message: 'Sport is required' });
   }

   try {
      const links = await linksService.getLinkBySportService(sport);
      res.json(links);
   } catch (error) {
      res.status(500).json({ message: 'Error fetching links', error });
   }
};
