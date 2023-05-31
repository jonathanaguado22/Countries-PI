const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
