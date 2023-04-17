// import express from 'express';
// import cors from 'cors'
const routes = require('./routes')
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '100mb' }));


module.exports = app;