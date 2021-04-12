const createParkingLot = require('../domains/createParkingLot');

const create = (parkingLotSlot) => {
    if (typeof parseInt(parkingLotSlot) !== 'number') throw new Error('Please enter valid number')
    const createdParkingLot = createParkingLot({ parkingLotSlot })
    return createdParkingLot
}

module.exports = create