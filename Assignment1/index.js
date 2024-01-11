const express = require('express'),
     http = require('http');

const hostname = 'localhost';
const port = 3014;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const app = express();
const server = http.createServer(app);

dishRouter.use(bodyParser.json());
dishRouter.route('/')

app.use('/dishes', dishRouter);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
