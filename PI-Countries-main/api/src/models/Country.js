const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
      len: [1,3],
      },
    },
    name: {
      type: DataTypes.STRING,
      
      
    },
    flag: {
      type: DataTypes.STRING,
      
    },
    continent: {
      type: DataTypes.STRING,
      
    },
    capital: {
      type: DataTypes.STRING,
      

    },
    subregion: {
      type: DataTypes.STRING,
      
    },
    area: {
      type: DataTypes.STRING,
      
    },
    population: {
      type: DataTypes.STRING,
      
    }
  },
  { 
    timestamps: false
  });
};
