const router = require('express').Router();
const pool = require('../modules/pool');

// POST /genre
router.post('/', (req, res) => {
    console.log('POST /genre router');
    const genre = req.body;
    const queryText = `INSERT INTO "genre" ("type")
                       VALUES($1);`;
    pool.query(queryText, [
        genre.type,
    ]).then((results) => {
        res.sendStatus(201)
    }).catch((error) => {
        console.log('Error making query on POST/genre', error);
        res.send(500)
    })
});

router.get('/', (req, res) => {
    console.log('GET /genre router');
    let queryText = `SELECT * FROM "genre" ORDER BY "type" ASC;`;
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

router.delete('/:id', (req, res) => {
    console.log(req.params);
    const genre_id = req.params.id;
    let queryText = `DELETE FROM "genre" WHERE "id" = $1`;
    pool.query(queryText, [genre_id]).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
    });
});
module.exports = router;