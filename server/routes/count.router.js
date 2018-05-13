const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /genre router');
    let queryText = `SELECT "genre"."type", "genre"."id", 
                     COUNT ("genre_id") FROM "movies"
                     FULL OUTER JOIN "genre" ON "genre"."id"="movies"."genre_id"
                     GROUP BY "genre"."type", "genre"."id";`;
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