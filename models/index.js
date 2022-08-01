const Trip = require("./trip")
const Traveller = require("./traveller")
const Location = require("./locations")

Location.hasMany(Trip)
Traveller.hasMany(Trip)
Trip.belongsTo(Location)
Trip.belongsTo(Traveller)


module.exports = {
    Trip,
    Traveller,
    Location
}