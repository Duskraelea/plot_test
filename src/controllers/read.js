const getParkingLot = require('../domains/getParkingLot');

const read = ({ currentParkingLot, condition }) => {
    getParkingLot({ currentParkingLot, condition })
}

module.exports = read