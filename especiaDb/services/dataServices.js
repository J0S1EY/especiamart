const dB = require('./especiaDb')

// get products
const getProducts = () => {
    return dB.Products.find().then((data) => {
        if (data) {
            return {
                statusCode: 200,
                result: data
            }
        } else {
            return {
                statusCode: 404,
                message: 'Failed to fetch data'
            }
        }
    })
}
module.exports = {
    getProducts
}
