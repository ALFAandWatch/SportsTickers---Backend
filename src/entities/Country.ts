import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Link } from './Link';

@Entity('countries')
export class Country {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column()
   name!: string;

   @Column()
   flagCode!: string;

   @OneToMany(() => Link, (links) => links.country)
   links!: Link[];
}
