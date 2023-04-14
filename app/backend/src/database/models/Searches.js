module.exports = (sequelize, DataTypes) => {
    const searches = sequelize.define('searches', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        thumbnail: DataTypes.STRING,
        title: DataTypes.STRING,
        original_price: DataTypes.STRING,
        permalink: DataTypes.STRING,
    },
    {
        timestamps: false
    });

    return searches;
}
