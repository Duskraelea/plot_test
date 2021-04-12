const create = require('./create');


describe('Controller Create', () => {
    test('Correctly create', () => {
        const correctInput = {
            slot: 7
        }
        const mockResult = [
            { slotNumber: 1, licensePlate: null, color: null },
            { slotNumber: 2, licensePlate: null, color: null },
            { slotNumber: 3, licensePlate: null, color: null },
            { slotNumber: 4, licensePlate: null, color: null },
            { slotNumber: 5, licensePlate: null, color: null },
            { slotNumber: 6, licensePlate: null, color: null },
            { slotNumber: 7, licensePlate: null, color: null }
          ]
        const result = create(correctInput)
        expect(result).toEqual(mockResult)
    })

    test('Throw error if wrong input', () => {
        const incorrectInput = {
            slot: 'Test'
        }
        expect(() => { create(incorrectInput) }).toThrowError('Please enter valid number')
    })
})