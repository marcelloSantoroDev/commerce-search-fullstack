const app = require('express');
const searchesRoute = require('./searches.route')

const router = app.Router();

router.use('/db', searchesRoute)

module.exports = router;