const find = ({ collection, key, value }) => {
    const object = collection.find(object => object[`${key}`] === value)
    return {
        lot: object,
        index: collection.indexOf(object)
    }
}

const findAll = ({ collection, key, value }) => collection.filter(object => object[`${key}`] === value)

const replace = ({ collection, value, index }) => {
    let mutatedCollection = collection
    mutatedCollection.splice(index, 1, value)
    return mutatedCollection
}


module.exports = {
    find,
    findAll,
    replace
};