'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    document: {
        type: DataTypes.STRING
      },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    score: DataTypes.FLOAT,
    municipality: DataTypes.INTEGER,
    check: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
  };
  return Person;
};