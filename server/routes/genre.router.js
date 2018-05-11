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
module.exports = router;