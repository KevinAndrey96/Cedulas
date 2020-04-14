'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    document: {
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: 'Persona ya en base de datos'
        }
      },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    score: DataTypes.FLOAT,
    municipality: DataTypes.INTEGER
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
  };
  return Person;
};