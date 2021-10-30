'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({schedule, Class}) {
      // define association here
      schedule.belongsTo(Class)
    }
  };
  schedule.init({
    name: DataTypes.STRING,
    ClassId: DataTypes.INTEGER,
    session: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'schedule',
  });
  return schedule;
};