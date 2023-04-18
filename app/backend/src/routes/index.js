const app = require('express');
const searchesRoute = require('./searchesRoute')
const buscapeRoute = require('./buscapeRoute')

const router = app.Router();

router.use('/db', searchesRoute);
router.use('/api', buscapeRoute);

module.exports = router;