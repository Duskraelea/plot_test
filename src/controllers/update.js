const parking = require('../domains/parking');

const update = ({ parkingLot, incomingCar }) => {
    if (!incomingCar.licensePlate) throw new Error('Please enter valid license plate')
    const updatedParkingLot = parking({ parkingLot, incomingCar })
    return updatedParkingLot
}

module.exports = update