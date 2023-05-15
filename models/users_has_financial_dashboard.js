'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_has_financial_dashboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users_has_financial_dashboard.init({
    user_id: DataTypes.INTEGER,
    financial_dashboard_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_has_financial_dashboard',
  });
  return users_has_financial_dashboard;
};