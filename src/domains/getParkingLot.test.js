const getParkingLot = require('./getParkingLot')

describe('Get data in parking lot', () => {
  test('Correctly get data by condition', () => {
    const mockParkingSlotValue = {
      currentParkingLot: [
        { slotNumber: 1, licensePlate: 'KA-01-HH-1234', color: 'White' },
        { slotNumber: 2, licensePlate: 'KA-01-HH-9999', color: 'White' },
        { slotNumber: 3, licensePlate: 'KA-01-BB-0001', color: 'Black' },
        { slotNumber: 5, licensePlate: 'KA-01-HH-2701', color: 'Blue' },
      ],
      condition: {
        key: 'color',
        value: 'White',
        expectResult: 'licensePlate',
      },
    }
    const mockResult = 'KA-01-HH-1234, KA-01-HH-9999'
    const result = getParkingLot(mockParkingSlotValue)
    expect(result).toEqual(mockResult)
  })

  test('Correctly return not found if cannot find data', () => {
    const mockParkingSlotValue = {
      currentParkingLot: [
        { slotNumber: 1, licensePlate: 'KA-01-HH-1234', color: 'White' },
        { slotNumber: 2, licensePlate: 'KA-01-HH-9999', color: 'White' },
        { slotNumber: 3, licensePlate: 'KA-01-BB-0001', color: 'Black' },
        { slotNumber: 5, licensePlate: 'KA-01-HH-2701', color: 'Blue' },
      ],
      condition: {
        key: 'color',
        value: 'Purple',
        expectResult: 'licensePlate',
      },
    }
    const mockResult = 'Not found'
    const result = getParkingLot(mockParkingSlotValue)
    expect(result).toEqual(mockResult)
  })
})
