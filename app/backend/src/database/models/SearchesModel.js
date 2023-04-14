const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Searches = sequelize.define('searches', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    thumbnail: DataTypes.STRING,
    title: DataTypes.STRING,
    original_price: DataTypes.STRING,
    permalink: DataTypes.STRING,
});

module.exports = Searches;
