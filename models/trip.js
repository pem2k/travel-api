const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Trip extends Model {}

Trip.init(
    {
        id:{
          type: DataTypes.INTEGER,
        },

        trip_budget:{
            type: DataTypes.FLOAT,
        },
        traveller_amt: {
            type: DataTypes.INTEGER
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trip',
      }
)

module.exports = Trip