const app = require('express');

const router = app.Router();
const { bucapeApiController } = require('../controllers')

router.post('/buscape', bucapeApiController.scrape);

module.exports = router;