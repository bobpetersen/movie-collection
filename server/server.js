const express = require('express');
const bodyParser = require('body-parser');
const movieRouter = require('./routes/movie.router');
const genreRouter = require('./routes/genre.router');
const countRouter = require('./routes/count.router');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('server/public'));

app.use(bodyParser.json());

app.use('/movie', movieRouter);
app.use('/genre', genreRouter);
app.use('/count', countRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});