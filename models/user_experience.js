'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_experience.init({
    user_game_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    experience: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'user_experience',
  });
  return user_experience;
};