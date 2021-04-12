const parking = require('../domains/parking');

const update = ({ parkingLot, incomingCar }) => {
    if (!incomingCar.licensePlate) throw new Error('Please enter valid license plate')
    if (!incomingCar.color) throw new Error('Please enter valid color')
    return parking({ parkingLot, incomingCar })
}

module.exports = update