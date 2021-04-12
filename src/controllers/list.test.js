const list = require('./list')

const mockCorrectParkingSlotValue = {
  currentParkingLot: [
    { slotNumber: 1, licensePlate: 'KA-01-HH-1234', color: 'White' },
    { slotNumber: 2, licensePlate: 'KA-01-HH-9999', color: 'White' },
  ],
}

const mockCorrectParkingSlotWithNullValue = {
  currentParkingLot: [
    { slotNumber: 1, licensePlate: 'KA-01-HH-1234', color: 'White' },
    { slotNumber: 2, licensePlate: null, color: null },
    { slotNumber: 3, licensePlate: 'KA-01-BB-0001', color: 'Black' },
    { slotNumber: 4, licensePlate: null, color: null },
    { slotNumber: 5, licensePlate: 'KA-01-HH-2701', color: 'Blue' },
  ],
}

describe('List Parking Lot', () => {
  test('Correctly list parking lot', () => {
    const mockResult = [
      {
        'Slot No.': 1,
        'Registration No.': 'KA-01-HH-1234',
        Colour: 'White',
      },
      {
        'Slot No.': 3,
        'Registration No.': 'KA-01-BB-0001',
        Colour: 'Black',
      },
      {
        'Slot No.': 5,
        'Registration No.': 'KA-01-HH-2701',
        Colour: 'Blue',
      }
    ]
    const result = list(mockCorrectParkingSlotWithNullValue)
    expect(result).toEqual(mockResult)
  })
})
