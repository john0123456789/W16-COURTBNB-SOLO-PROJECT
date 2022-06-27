'use strict';
module.exports = (sequelize, DataTypes) => {
  const Court = sequelize.define('Court', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Court.associate = function(models) {
    Court.hasMany(models.Review, { foreignKey: 'courtId' })
    Court.belongsTo(models.User, { foreignKey: 'userId' })
    Court.hasOne(models.Image, { foreignKey: 'courtId' })
  };
  return Court;
};
