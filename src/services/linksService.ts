import { AppDataSource } from '../config/data-source';
import { Link } from '../entities/Link';

export const getLinkBySportService = async (sport: string): Promise<Link[]> => {
   const linksRepository = AppDataSource.getRepository(Link);
   const links = await linksRepository.find({
      where: {
         sport,
      },
      relations: { country: true },
   });

   return links;
};

// export const addLinkService = async (req: Request, res: Response) => {
//    const { name, icon } = req.body;
//    const newSport = sportRepository.create({ name, icon });
//    await sportRepository.save(newSport);
//    res.json(newSport);
// };
