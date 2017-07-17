import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as constants from './constants'; // import constants
import routes from './routes';
import swaggerJSDoc from 'swagger-jsdoc';

const app = express(); // new server

const swaggerDefinition = {
  info: {
    title: 'Express swagger api',
    version: '1.0.0',
    description: 'API documentation for Express swagger',
  },
  host: 'localhost:3000',
  basePath: '/',
};

const options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: [__dirname + '/routes/*'],
};

const swaggerSpec = swaggerJSDoc(options);

mongoose.connect(`mongodb://localhost:${constants.MONGO_PORT}/${constants.DB_NAME}`);

// parse body params
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/swagger', express.static(__dirname + '/public/api-docs/'))

app.use('/api', routes);

// serve swagger spec
app.get('/swagger.json', (req, res) => {
	res.json(swaggerSpec);
})

// start app on PORT
app.listen(constants.PORT, () => console.log(`Started server on ${constants.PORT}`));