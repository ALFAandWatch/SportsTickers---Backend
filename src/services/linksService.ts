import { AppDataSource } from '../config/data-source';
import { Links } from '../entities/links';

export const getLinkBySportService = async (
   sport: string
): Promise<Links[]> => {
   const linksRepository = AppDataSource.getRepository(Links);
   return await linksRepository.find({
      where: {
         sport,
      },
   });
};

// export const addLinkService = async (req: Request, res: Response) => {
//    const { name, icon } = req.body;
//    const newSport = sportRepository.create({ name, icon });
//    await sportRepository.save(newSport);
//    res.json(newSport);
// };
