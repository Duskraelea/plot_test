const { createServer } = require('http');
const fs = require('fs');
const parkingLotController = require('./src/controllers');

const commandFile = './functional_spec/fixtures/file_input.txt';

let masterParkingLot
let searchCondition
let lotData

const init = () => {
    const commands = fs.readFileSync(commandFile,'utf-8')
    const commandList = commands.split(/\r?\n/)

    commandList.forEach(command => {
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
                const parkingLotStatus = parkingLotController.list({ currentParkingLot: masterParkingLot })
                console.table(parkingLotStatus)
                break;
            case 'registration_numbers_for_cars_with_colour':
                searchCondition = {
                    key: 'color',
                    value: command.split(' ')[1],
                    expectResult: 'licensePlate'
                }
                lotData = parkingLotController.read({ currentParkingLot: masterParkingLot, condition: searchCondition })
                console.log(lotData);

                break;
            case 'slot_numbers_for_cars_with_colour':
                searchCondition = {
                    key: 'color',
                    value: command.split(' ')[1],
                    expectResult: 'slotNumber'
                }
                lotData = parkingLotController.read({ currentParkingLot: masterParkingLot, condition: searchCondition })
                console.log(lotData);

                break;
            case 'slot_number_for_registration_number':
                searchCondition = {
                    key: 'licensePlate',
                    value: command.split(' ')[1],
                    expectResult: 'slotNumber'
                }
                lotData = parkingLotController.read({ currentParkingLot: masterParkingLot, condition: searchCondition })
                console.log(lotData);

                break;
            default:
                console.log('Error wrong command')
                break;
        }
    })
}
init()