const getAllParkingLot = ({ currentParkingLot }) => {
    // this code is for utilizing "parking lot slot" as an index
    // const objectToShow = currentParkingLot.reduce((acc, { slotNumber, ...item}, i) => {
    //     if (item.licensePlate) {
    //         acc[slotNumber] = item
    //     }
    //     console.log('acc', acc);
    //     return acc
    // }, {})

    // this code is keeping array index
    const objectToShow = currentParkingLot.filter(item => item.licensePlate !== null).map(item => {
        return {
            ['Slot No.']: item.slotNumber,
            ['Registration No.']: item.licensePlate,
            Colour: item.color
        }
    })
    console.table(objectToShow)
}

module.exports = getAllParkingLot