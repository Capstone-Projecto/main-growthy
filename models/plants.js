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
    plant_desc: DataTypes.STRING,
    cultivation: DataTypes.STRING,
    plant_disease: DataTypes.STRING,
    prevention: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    price: DataTypes.INTEGER,
    plant_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'plants',
  });
  return plants;
};