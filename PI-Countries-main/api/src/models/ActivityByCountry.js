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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
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