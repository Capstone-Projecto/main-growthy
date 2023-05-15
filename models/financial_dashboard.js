'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class financial_dashboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.users, {
        through: 'users_has_financial_dashboard',
        as: 'financial_dashboard',
        foreignKey: 'financial_dashboard_id',
        otherKey: 'user_id'
      })
    }
  }
  financial_dashboard.init({
    date_time: DataTypes.DATE,
    pemasukan: DataTypes.INTEGER,
    pengeluaran: DataTypes.INTEGER,
    desc_pemasukan: DataTypes.STRING,
    desc_pengeluaran: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'financial_dashboard',
  });
  return financial_dashboard;
};