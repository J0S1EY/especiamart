const dB = require('./especiaDb') // import db 

// get products
const getProducts = () => {
    return dB.Products.find().then((data) => {
        if (data) {
            return {
                statusCode: 200,
                products: data
            }
        } else {
            return {
                statusCode: 404,
                message: 'Failed to fetch data'
            }
        }
    })
}

const addToWishlist = (id, title, price, description, category, image) => {

}



module.exports = {
    getProducts
}
