import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Platform } from "./PlatformEntity";
import { Genre } from "./GenreEntity";
import { Character } from "./CharacterEntity";

@Entity({
  name: "VIDEOGAMES",
})
export class Videogame {
  @PrimaryGeneratedColumn()
	id!: number;

  @Column({unique: true})
	title!: string;

  @Column({type: "text"})
	description!: string;

  @Column()
	price!: number;

  @Column({default: 3})
	rating!: number;

  @Column()
	releaseDate!: Date;

  //* Videogame N:1 Platform
  @ManyToOne(() => Platform, (platform => platform.videogames))
  @JoinColumn({ name: "platform_id" })
  platform!: Platform;

  //* Videogame N:N Genre
  @ManyToMany(() => Genre)
  @JoinTable({ name: "VIDEOGAMES_GENRES"})
  genres!: Genre[];

  //* Videogame 1:1 Character
  @OneToOne(() => Character)
  @JoinColumn({ name: "character_id"})
  character!: Character;
}
/*
{
  title: ...
  character: {
    name: ...
  }
}
*/