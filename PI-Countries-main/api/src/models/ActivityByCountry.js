const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activityByCountry', {
    id: {
        type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      },
      alpha3Code:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
        len: [1,3],
        is: /^[a-zA-Z]{1,3}$/,
        }
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
      },
    nameActivity: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isIn: {
            args: [[1, 2, 3, 4, 5]]
          },
        },
        },
      duration: {
        type: DataTypes.INTEGER,
      },
      season: {
        type: DataTypes.STRING,
      }
  },
  { 
    timestamps: false
  });
};