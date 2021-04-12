const update = require('./update')

describe('Enter parking', () => {
  test('Correctly park', () => {
    const mockData = {
        parkingLot: [
            { slotNumber: 1, licensePlate: null, color: null },
            { slotNumber: 2, licensePlate: null, color: null },
            { slotNumber: 3, licensePlate: null, color: null },
            { slotNumber: 4, licensePlate: null, color: null },
        ],
        incomingCar: {
            licensePlate: 'KA-01-HH-1234',
            color: 'White'
        }
    }
    const mockResult = [
        { slotNumber: 1, licensePlate: 'KA-01-HH-1234', color: 'White' },
        { slotNumber: 2, licensePlate: null, color: null },
        { slotNumber: 3, licensePlate: null, color: null },
        { slotNumber: 4, licensePlate: null, color: null },
      ]
    const result = update(mockData)
    expect(result).toEqual(mockResult)
  })

  test('Return error if parking lot is full', () => {
    const mockData = {
        parkingLot: [
            { slotNumber: 1, licensePlate: 'KA-01-HH-1234', color: 'White' },
            { slotNumber: 2, licensePlate: 'KA-01-HH-9999', color: 'White' },
            { slotNumber: 3, licensePlate: 'KA-01-HH-2701', color: 'Blue' },
        ],
        incomingCar: {
            licensePlate: 'KA-01-HH-1234',
            color: 'White'
        }
    }
    const mockResult = [
        { slotNumber: 1, licensePlate: 'KA-01-HH-1234', color: 'White' },
        { slotNumber: 2, licensePlate: 'KA-01-HH-9999', color: 'White' },
        { slotNumber: 3, licensePlate: 'KA-01-HH-2701', color: 'Blue' },
    ]
    const result = update(mockData)
    expect(result).toEqual(mockResult)
  })

  test('Throw error if wrong input license plate', () => {
    const incorrectInput = {
      parkingLot: [
        { slotNumber: 1, licensePlate: 'KA-01-HH-1234', color: 'White' },
        { slotNumber: 2, licensePlate: 'KA-01-HH-9999', color: 'White' },
        { slotNumber: 3, licensePlate: null, color: null },
        { slotNumber: 4, licensePlate: 'KA-01-HH-2701', color: 'Blue' },
      ],
      incomingCar: {
        licensePlate: null,
        color: null
      },
    }
    expect(() => {
        update(incorrectInput)
    }).toThrowError('Please enter valid license plate')
  })

  test('Throw error if wrong input color', () => {
    const incorrectInput = {
      parkingLot: [
        { slotNumber: 1, licensePlate: 'KA-01-HH-1234', color: 'White' },
        { slotNumber: 2, licensePlate: 'KA-01-HH-9999', color: 'White' },
        { slotNumber: 3, licensePlate: null, color: null },
        { slotNumber: 4, licensePlate: 'KA-01-HH-2701', color: 'Blue' },
      ],
      incomingCar: {
        licensePlate: 'test',
        color: null
      },
    }
    expect(() => {
        update(incorrectInput)
    }).toThrowError('Please enter valid color')
  })
})
