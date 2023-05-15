'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plants_has_disease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  plants_has_disease.init({
    plant_id: DataTypes.INTEGER,
    disease_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'plants_has_disease',
  });
  return plants_has_disease;
};