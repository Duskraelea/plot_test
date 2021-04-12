const createParkingLot = ({ parkingLotSlot }) => {
    let parkingLot = []
    for (let i = 0; i < parseInt(parkingLotSlot); i += 1) {
        parkingLot.push({
            slotNumber: i + 1,
            licensePlate: null,
            color: null
        })
    }
    console.log(`Created a parking lot with ${parkingLotSlot} slot(s)`)
    return parkingLot
}

module.exports = createParkingLot
