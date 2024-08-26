import { AppDataSource } from "../config/data-source";
import { Character } from "../entities/CharacterEntity";
import { Genre } from "../entities/GenreEntity";
import { Platform } from "../entities/PlatformEntity";
import { Videogame } from "../entities/VideogameEntity";

export const videogameRepository = AppDataSource
  .getRepository(Videogame)
  .extend({
    findByTitle(title: string) {
      return this
        .createQueryBuilder("videogame")
        .where("videogame.title = :title", { title: title})
        .getOne()
    }
  });
export const platformRepository = AppDataSource.getRepository(Platform);
export const genreRepository = AppDataSource.getRepository(Genre);
export const characterRepository = AppDataSource.getRepository(Character);