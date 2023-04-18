
const app = require('express');
const { buscapeController } = require('../controllers');

const router = app.Router();

router.post('/buscape', buscapeController.scrape);

module.exports = router