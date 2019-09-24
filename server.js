const bodyParser = require('body-parser');
const express = require('express');
//const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

console.log(port);

app.use(express.static(path.resolve('angular/dist/angular')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((request, response, next) => {
    console.log(`requested url ${ request.url}`);

    next();
})



require('./server/config/database');
//require('./server/config/mongoose.js');
const routes = require('./server/routes');
app.use(routes);

app.listen(port, () => console.log(`express server listening on port ${port}`))
