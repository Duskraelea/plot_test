const utils = require('../utils');

const parking = ({ parkingLot, incomingCar }) => {
    let mutatedParkingLot = parkingLot

    // find available lot
    const availableLot = utils.find({
        collection: mutatedParkingLot,
        key: 'licensePlate',
        value: null
    })

    // if there are any available lot, park car into that lot
    if (availableLot.lot) {
        mutatedParkingLot = utils.replace({
            collection: mutatedParkingLot,
            value: {
                slotNumber: availableLot.lot.slotNumber,
                licensePlate: incomingCar.licensePlate,
                color: incomingCar.color
            },
            index: availableLot.index
        })
        console.log(`Allocated slot number: ${availableLot.lot.slotNumber}`)
        return mutatedParkingLot
    // if there are no available lot, return error message and return original lot
    } else {
        console.log('Sorry, parking lot is full')
        return parkingLot
    }
}

module.exports = parking