/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar/Remover uma informação do back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Parametros: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) ?parametro=X
 * Route Parametros: Parâmetros utilizados para identificar recursos /users/:id
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

/**
 * SGDBs: MySQL, SQLite,PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver SGDB: Select * FROM users
 * Query Builder: table('users').select('*').where()
 * Query Builder utilizado: Knexjs
 */
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //for dev

//for production
// app.use(cors({
//     origin: 'http://meuapp.com'
// }))
app.use(express.json());
app.use(routes);

app.listen(3333);
