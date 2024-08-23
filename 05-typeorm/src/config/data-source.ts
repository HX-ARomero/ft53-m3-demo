import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Videogame } from "../entities/VideogameEntity";
import { Platform } from "../entities/PlatformEntity";
import { Genre } from "../entities/GenreEntity";
import { Character } from "../entities/CharacterEntity";
dotenv.config();

export const AppDataSource = new DataSource({
  //* CREDENCIALES
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  //* CONFIG
  synchronize: true, //* Producción: false
  dropSchema: true, //* Producción: false
  logging: false, //* Comandos SQL
  entities: [Videogame, Platform, Genre, Character],
  subscribers: [],
  migrations: [],
});
