// const createParkingLot = require('../domains/createParkingLot');
const getAllParkingLot = require('../domains/getAllParkingLot');

const list = ({ currentParkingLot }) => {
    return getAllParkingLot({ currentParkingLot })
}

module.exports = list