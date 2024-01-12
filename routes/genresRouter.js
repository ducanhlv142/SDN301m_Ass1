const express = require('express');
const bodyParser = require('body-parser');

const genres = express.Router();

genres.use(bodyParser.json());

genres.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the genres to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the genres: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /genres');
    })
    .delete((req, res, next) => {
        res.end('Deleting all genres');
    });

genres.route('/:genresId')
    .get((req, res, next) => {
        res.end('Will send details of the genres: ' + req.params.genresId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /genres/' + req.params.genresId);
    })
    .put((req, res, next) => {
        res.write('Updating the genres: ' + req.params.genresId + '\n');
        res.end('Will update the genres: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting genres: ' + req.params.genresId);
    });

module.exports = genres;