-- OUTER LEFT JOIN
-- SELECT *
-- FROM personas
-- LEFT JOIN ciudades
-- ON personas.ciudad_id = ciudades.id
-- WHERE ciudades.id IS NULL;

-- INNER JOIN
-- SELECT *
-- FROM personas
-- INNER JOIN ciudades
-- ON personas.ciudad_id = ciudades.id;

-- SELECT * FROM personas
-- WHERE rating > 7 AND ciudad_id = 10;

-- UPDATE personas
-- SET ciudad_id = 10
-- WHERE NOT (nombre = 'Homero');

-- ALTER TABLE personas
-- ADD COLUMN ciudad_id INTEGER,
-- ADD CONSTRAINT fk_ciudad
-- FOREIGN KEY (ciudad_id) REFERENCES ciudades(id);

-- DELETE FROM personas WHERE rating = 10;

-- UPDATE personas SET rating = 10 WHERE rating < 7;

-- SELECT * FROM personas WHERE rating < 7;

-- SELECT apellido,
-- COUNT(*) AS cantidad_personas
-- FROM personas
-- GROUP BY apellido;

-- SELECT nombre, apellido, rating FROM personas ORDER BY nombre DESC;

-- INSERT INTO personas (apellido, nombre, rating)
-- VALUES ('Bubbie', 'Marge', 9);

-- INSERT INTO personas (apellido, nombre, rating)
-- VALUES ('Simpson', 'Maggie', 7), ('Simpson', 'Bart', 6);

-- INSERT INTO ciudades (id, nombre) VALUES (10, 'Springfield');

-- INSERT INTO ciudades (nombre) VALUES ('Mexico');

-- CREATE TABLE personas
-- (
--   id SERIAL PRIMARY KEY,
--   apellido VARCHAR(255) NOT NULL,
--   nombre VARCHAR(255) UNIQUE,
--   rating INTEGER,
--   CONSTRAINT check_rating CHECK (rating >= 1 AND rating <= 10)
-- );