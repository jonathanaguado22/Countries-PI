const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4
      },
    name: {
      type: DataTypes.STRING,
      
    },
    difficulty: {
        type: DataTypes.INTEGER,
        validate: {
          isIn: {
            args: [[1, 2, 3, 4, 5]]
          },
        },
        },
      duration: {
        type: DataTypes.STRING,
      },
      season: {
        type: DataTypes.STRING,
        
      }
  },
  { 
    timestamps: false
  });
};
