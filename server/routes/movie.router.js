const router = require('express').Router();
const pool = require('../modules/pool');

// POST /movie
router.post('/', (req, res) => {
    console.log('POST /movie router');
    const movies = req.body;
    const queryText = `INSERT INTO "movies" ("name", "release_date", "run_time", "image_url")
                       VALUES($1, $2, $3, $4);`;
    pool.query(queryText, [
        movies.name,
        movies.release_date,
        movies.run_time,
        movies.image_url
    ]).then((results) => {
        res.sendStatus(201)
    }).catch((error) => {
        console.log('Error making query on POST/movie', error);
        res.send(500)

    })
});


module.exports = router;