import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   ManyToOne,
   JoinColumn,
} from 'typeorm';
import { Country } from './Country';

@Entity('links')
export class Link {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column()
   url!: string;

   @Column()
   league!: string;

   @Column()
   sport!: string;

   @Column()
   countryId!: number;

   @ManyToOne(() => Country, (country) => country.links)
   @JoinColumn({ name: 'countryId' })
   country!: Country;
}
