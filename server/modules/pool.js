const pg = require('pg');
const Pool = pg.Pool;

const pool = new Pool({
    database: 'movie_collection',
    host: 'localhost', 
    port: 5432, 
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('pg connected');
});

pool.on('error', (error) => {
    console.log('Unexpected error on idle pg client', error);
});

module.exports = pool;