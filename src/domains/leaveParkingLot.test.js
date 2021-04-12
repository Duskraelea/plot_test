const leaveParkingLot = require('./leaveParkingLot')

describe('Leave parking lot', () => {
  test('Correctly set parking lot to null', () => {
    const mockData = {
        parkingLot: [
            { slotNumber: 1, licensePlate: 'KA-01-HH-1234', color: 'White' },
            { slotNumber: 2, licensePlate: 'KA-01-HH-9999', color: 'White' },
            { slotNumber: 3, licensePlate: 'KA-01-BB-0001', color: 'Black' },
            { slotNumber: 4, licensePlate: 'KA-01-HH-2701', color: 'Blue' },
        ],
        outgoingCar: {
            slot: 3
        }
    }
    const mockResult = [
        { slotNumber: 1, licensePlate: 'KA-01-HH-1234', color: 'White' },
        { slotNumber: 2, licensePlate: 'KA-01-HH-9999', color: 'White' },
        { slotNumber: 3, licensePlate: null, color: null },
        { slotNumber: 4, licensePlate: 'KA-01-HH-2701', color: 'Blue' },
      ]
    const result = leaveParkingLot(mockData)
    expect(result).toEqual(mockResult)
  })

  test('Return same parking lot if the lot already free', () => {
    const mockData = {
        parkingLot: [
            { slotNumber: 1, licensePlate: 'KA-01-HH-1234', color: 'White' },
            { slotNumber: 2, licensePlate: 'KA-01-HH-9999', color: 'White' },
            { slotNumber: 3, licensePlate: null, color: null },
            { slotNumber: 4, licensePlate: 'KA-01-HH-2701', color: 'Blue' },
        ],
        outgoingCar: {
            slot: 6
        }
    }
    const mockResult = [
        { slotNumber: 1, licensePlate: 'KA-01-HH-1234', color: 'White' },
        { slotNumber: 2, licensePlate: 'KA-01-HH-9999', color: 'White' },
        { slotNumber: 3, licensePlate: null, color: null },
        { slotNumber: 4, licensePlate: 'KA-01-HH-2701', color: 'Blue' },
      ]
    const result = leaveParkingLot(mockData)
    expect(result).toEqual(mockResult)
  })
})
