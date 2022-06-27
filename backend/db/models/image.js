'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    courtId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Court, { foreignKey: 'courtId' })
  };
  return Image;
};
