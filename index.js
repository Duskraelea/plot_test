const { createServer } = require('http');
const fs = require('fs');
const parkingLotController = require('./src/controllers');

const commandLocation = './functional_spec/fixtures/file_input.txt';

let masterParkingLot

const init = () => {
    const commands = fs.readFileSync(commandLocation,'utf-8')
    const arrayOfCommands = commands.split(/\r?\n/)

    arrayOfCommands.forEach(command => {
        switch (command.split(' ')[0]) {
            case 'create_parking_lot':
                masterParkingLot = parkingLotController.create({ slot: command.split(' ')[1] })
                break;
            case 'park':
                const updateObject = {
                    licensePlate: command.split(' ')[1],
                    color: command.split(' ')[2]
                }
                masterParkingLot = parkingLotController.update({ parkingLot: masterParkingLot, incomingCar: updateObject })
                break;
            case 'leave':
                const removeObject = {
                    slot: command.split(' ')[1]
                }
                masterParkingLot = parkingLotController.remove({ parkingLot: masterParkingLot, outgoingCar: removeObject })
                break;
            case 'status':
                console.log('masterParkingLot', masterParkingLot)
                console.log('CHECKSTATUS')
                break;
            case 'registration_numbers_for_cars_with_colour':
                console.log('REGIS_NUM')
                break;
            case 'slot_numbers_for_cars_with_colour':
                console.log('BOOKING')
                break;
            case 'slot_number_for_registration_number':
                console.log('CHECK_SLOT')
                break;
            default:
                console.log('Error wrong command')
                break;
        }
    })
}
init()