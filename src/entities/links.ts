import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Links {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column()
   url!: string;

   @Column()
   league!: string;

   @Column()
   sport!: string;

   @Column()
   country!: string;

   @Column()
   flagCode!: string;
}
