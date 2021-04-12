const createParkingLot = require('./createParkingLot');

const mockCorrectParkingSlotValue = {
    parkingLotSlot: 7
}

describe('Create Parking Lot', () => {
    test('Correctly create parking lot', () => {
        const mockResult = [
            { slotNumber: 1, licensePlate: null, color: null },
            { slotNumber: 2, licensePlate: null, color: null },
            { slotNumber: 3, licensePlate: null, color: null },
            { slotNumber: 4, licensePlate: null, color: null },
            { slotNumber: 5, licensePlate: null, color: null },
            { slotNumber: 6, licensePlate: null, color: null },
            { slotNumber: 7, licensePlate: null, color: null }
          ]
        const result = createParkingLot(mockCorrectParkingSlotValue)
        expect(result).toEqual(mockResult)
    })
})