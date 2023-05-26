'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class disease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.plants, {
        through: 'plants_has_disease',
        as: 'plants',
        foreignKey: 'disease_id',
        otherKey: 'plant_id'
      })
    }
  }
  disease.init({
    disease_local_name: DataTypes.STRING,
    target: DataTypes.STRING,
    scientic_name: DataTypes.STRING,
    disease_desc: DataTypes.STRING,
    symptoms: DataTypes.STRING,
    prevention: DataTypes.STRING,
    causes: DataTypes.STRING,
    potention: DataTypes.STRING,
    treatment: DataTypes.STRING,
    disease_images: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'disease',
  });
  return disease;
};