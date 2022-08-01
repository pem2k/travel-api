const Trip = require("./trip-model")
const Traveller = require("./traveller-model")
const Location = require("./location-model")

Location.hasMany(Trip)
Traveller.hasMany(Trip)
Trip.belongsTo(Location)
Trip.belongsTo(Traveller)


module.exports = {
    Trip,
    Traveller,
    Location
}