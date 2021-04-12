const createParkingLot = require('../domains/createParkingLot');

const create = ({ slot }) => {
    if (isNaN(slot)) throw new Error('Please enter valid number')
    return createParkingLot({ parkingLotSlot: slot })
}

module.exports = create