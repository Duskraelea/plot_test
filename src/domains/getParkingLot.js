const utils = require('../utils');

const getParkingLotByCondition = ({ currentParkingLot, condition }) => {
    const lots = utils.findAll({
        collection: currentParkingLot,
        key: condition.key,
        value: condition.value,
    })

    const result = []
    lots.forEach(lot => {
        result.push(lot[`${condition.expectResult}`])
    })

    return result.length > 0 ? result.join(', ') : 'Not found'
}

module.exports = getParkingLotByCondition