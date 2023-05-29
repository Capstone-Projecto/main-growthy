'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.disease, {
        through: 'plants_has_disease',
        as: 'disease',
        foreignKey: 'plant_id',
        otherKey: 'disease_id'
      })
    }
  }
  plants.init({
    local_name: DataTypes.STRING,
    species: DataTypes.STRING,
    genus: DataTypes.STRING,
    ordo: DataTypes.STRING,
    plant_desc: DataTypes.TEXT,
    cultivation: DataTypes.TEXT,
    plant_disease: DataTypes.STRING,
    prevention: DataTypes.TEXT,
    difficulty: DataTypes.STRING,
    price: DataTypes.INTEGER,
    plant_img_normal: DataTypes.STRING,
    plant_img_wide: DataTypes.STRING,
    plant_img_zoom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'plants',
  });
  return plants;
};