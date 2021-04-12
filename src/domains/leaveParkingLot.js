const utils = require('../utils');

const leaveParking = ({ parkingLot, outgoingCar }) => {
    let mutatedParkingLot = parkingLot

    // find car in that slot
    const slot = utils.find({
        collection: mutatedParkingLot,
        key: 'slotNumber',
        value: parseInt(outgoingCar.slot)
    })

    // if there are any car in that slot, remove the car
    if (slot.lot) {
        mutatedParkingLot = utils.replace({
            collection: mutatedParkingLot,
            value: {
                slotNumber: slot.lot.slotNumber,
                licensePlate: null,
                color: null
            },
            index: slot.index
        })
        console.log(`Slot number ${slot.lot.slotNumber} is free`)
        return mutatedParkingLot
    // if the slot is not exist, return error message and return original lot
    } else {
        console.log(`The slot ${outgoingCar.slot} is not existed`)
        return parkingLot
    }
}

module.exports = leaveParking