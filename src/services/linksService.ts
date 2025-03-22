import { AppDataSource } from '../config/data-source';
import { ILinkDto } from '../Dtos/LinkDto';
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

export const addLinkService = async (linkData: ILinkDto) => {
   const linksRepository = AppDataSource.getRepository(Link);
   const newLink = linksRepository.create(linkData);
   await linksRepository.save(newLink);
   return newLink;
};
