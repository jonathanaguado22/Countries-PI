const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    alpha3Code:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
      len: [1,3],
      is: /^[a-zA-Z]{1,3}$/,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  { 
    timestamps: false
  });
};
