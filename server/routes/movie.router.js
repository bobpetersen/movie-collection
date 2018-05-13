const router = require('express').Router();
const pool = require('../modules/pool');

// POST /movie
router.post('/', (req, res) => {
	console.log('POST /movie router');
	const movies = req.body;
	const queryText = `INSERT INTO "movies" ("name", "genre_id", "release_date", "run_time", "image_url")
               VALUES($1, $2, $3, $4, $5);`;
	pool.query(queryText, [
		movies.name,
		movies.genre_id,
		movies.release_date,
		movies.run_time,
		movies.image_url,
	]).then((results) => {
		res.sendStatus(201)
	}).catch((error) => {
		console.log('Error making query on POST/movie', error);
		res.send(500)
	})

});
// GET /movie
router.get('/', (req, res) => {
	console.log('GET /movie router');
	let queryText = `SELECT "movies".*, "genre"."type", "genre"."id"
					 FROM "genre"
					 JOIN "movies"
					 ON "genre"."id" = "movies"."genre_id"
					 ORDER BY "movies"."name";`;
	pool.query(queryText)
		.then((results) => {
			res.send(results.rows);
			console.log(results.rows);
		})
		.catch((error) => {
			console.log('error with SQL SELECT on GET', error);
			res.sendStatus(500);
		});
});

module.exports = router;