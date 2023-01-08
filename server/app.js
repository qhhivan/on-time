const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const userRoutes = require('./routes/user');
const stundenplanRoutes = require('./routes/stundenplan');
const verspaetungenRoutes = require('./routes/verspaetungen');


const { notFound, errorHandler } = require('./middleware/errorHandler');

require('colors');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());

app.use(express.json());

// Routen
app.use('/user', userRoutes);
app.use('/stundenplan', stundenplanRoutes);
app.use('/verspaetungen', verspaetungenRoutes);




app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);
