const getParkingLot = require('../domains/getParkingLot');

const read = ({ currentParkingLot, condition }) => {
    return getParkingLot({ currentParkingLot, condition })
}

module.exports = read