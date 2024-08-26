import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "GENRES",
})
export class Genre {
  @PrimaryGeneratedColumn()
	id!: number;

  @Column({unique: true})
	name!: string;

  //* Genre N:N Videogame
  //* Se declara en Entidad Principal => Videogame
}