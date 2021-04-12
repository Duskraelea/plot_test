const utils = require('../utils');

const parking = ({ parkingLot, incomingCar }) => {
    let mutatedParkingLot = parkingLot
    const availableLot = utils.find({
        collection: mutatedParkingLot,
        key: 'licensePlate',
        value: null
    })

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
        return mutatedParkingLot
    } else {
        console.log('Sorry, parking lot is full')
        return parkingLot
    }
}

module.exports = parking