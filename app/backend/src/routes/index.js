const app = require('express');
const searchesRoute = require('./searchesRoute')

const router = app.Router();

router.use('/db', searchesRoute);

module.exports = router;