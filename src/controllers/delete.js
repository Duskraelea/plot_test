const leaveParking = require('../domains/leaveParkingLot');

const remove = ({ parkingLot, outgoingCar }) => {
    if (!outgoingCar.slot) throw new Error('Please enter valid slot')
    const removedParkingLot = leaveParking({ parkingLot, outgoingCar })
    return removedParkingLot
}

module.exports = remove