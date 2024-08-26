import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Videogame } from "./VideogameEntity";

@Entity({
  name: "PLATFORMS",
})
export class Platform {
  @PrimaryGeneratedColumn()
	id!: number;

  @Column({unique: true})
	name!: string;

  //* Platform 1:N Videogame
  @OneToMany(() => Videogame, (videogame => videogame.platform))
  videogames!: Videogame[];
}