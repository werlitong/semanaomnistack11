const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//login
routes.post('/sessions',SessionController.create);

//list ong
routes.get('/ongs', OngController.index);

//cadastra ong
routes.post('/ongs', OngController.create);

//lista caso
routes.get('/incidents',IncidentController.index);

//lista casos de uma ong
routes.get('/profile',ProfileController.index);

//cria caso
routes.post('/incidents', IncidentController.create);

//deleta caso
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;