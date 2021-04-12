// const createParkingLot = require('../domains/createParkingLot');
const getAllParkingLot = require('../domains/getAllParkingLot');

const list = ({ currentParkingLot }) => {
    getAllParkingLot({ currentParkingLot })
}

module.exports = list