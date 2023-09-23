'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    static associate(models) {
      // Menu 모델과 Restaurant 모델 간의 관계 설정
      Menu.belongsTo(models.Restaurant, { foreignKey: 'restaurantId' });
    }
  }

  Menu.init({
    menuId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    menuName: DataTypes.STRING,
    menuPrice: DataTypes.INTEGER,
    menuImg: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};