# movie-collection
Angular Extended Weekend Project

//----------BASE----------//
[X] create database = movie collection
[X] create table for movies [ name, release_date, image_url]
[X] create table for genre [ genre_movie]
[X] add above SQL queries to readme
[X] create server, public folder, add vendor JS files        and serve up static HTML file
[X] create HTML form for submitting a movie
[X] create app controller for movies
[X] create POST route for submitting movies - will include SQL INSERT query
[ ] create app controller for genres
[ ] create POST route for submitting genres - will include SQL INSERT query
[ ] create a GET route that returns all movies
[ ] display movies on the DOM in an HTML table
[ ] add DELETE movie functionality and route
[ ] add client side routing
[ ] add HTML form to submit a genre
[ ] display a list of all genres with ability to DELETE a 'not in use' genre





SQL queries
CREATE TABLE "movies"(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(150),
	"genre" VARCHAR(50),
	"release_date" INT,
	"run_time" INT,
	"image_url" VARCHAR(250)
);

CREATE TABLE "genre"(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(150)
);

INSERT INTO "movies" ("name", "release_date", "run_time", "image_url")
VALUES ('Planet of the Apes', 1968, 112, 'apes.jpg'),
('Fight Club', 1999, 139, 'fight_club.jpg');

INSERT INTO "genre" ("type")
VALUES ('Drama'), ('Sci-Fi');

SELECT * FROM "movies";

SELECT * FROM "genre";
