'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Case extends Model {
    static associate(models) {
      Case.hasMany(models.Note,{
        foreignKey: 'id',
      })
    }
  }
  Case.init({
    case_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Case',
  });
  return Case;
};