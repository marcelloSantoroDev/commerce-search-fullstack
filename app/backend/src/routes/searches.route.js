const app = require('express');

const router = app.Router();
const { searchesController } = require('../controllers')

router.post('/searches', searchesController.createSearch)

module.exports = router;