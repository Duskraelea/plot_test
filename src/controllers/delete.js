const leaveParking = require('../domains/leaveParkingLot');

const remove = ({ parkingLot, outgoingCar }) => {
    if (isNaN(outgoingCar.slot)) throw new Error('Please enter valid slot')
    return leaveParking({ parkingLot, outgoingCar })
}

module.exports = remove