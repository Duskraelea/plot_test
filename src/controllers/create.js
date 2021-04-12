const createParkingLot = require('../domains/createParkingLot');

const create = ({ slot }) => {
    if (typeof parseInt(slot) !== 'number') throw new Error('Please enter valid number')
    const createdParkingLot = createParkingLot({ parkingLotSlot: slot })
    return createdParkingLot
}

module.exports = create