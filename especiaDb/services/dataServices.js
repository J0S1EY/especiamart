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
// wish list adding 
const addToWishlist = (id, title, price, description, category, image) => {
    return dB.Wishlist.findOne({ id, }).then((result) => { // is product allready added..?
        if (result) {
            return { // return status to client
                statusCode: 404,
                message: "Product already added "
            };
        } else {
            const newProduct = new dB.Wishlist({
                id,
                title,
                price,
                description,
                category,
                image,
            });
            newProduct.save()   // new product push to database 

            return { // return status to client
                statusCode: 200,
                message: 'Product successfully added your wish list'
            }
        }
    })
}
// get wish list
const getWishlist = () => {
    return dB.Wishlist.find().then((result) => {
        if (result) {
            return {
                statusCode: 200,
                data: result
            }
        } else {
            return {
                statusCode: 404,
                message: 'Failed to fetch data'
            }
        }
    })
}
// delete wish list item
const deleteWishlist = (id) => {
    console.log(id)
    return dB.Wishlist.deleteOne({ id }).then((data) => {
        if (data) {
            return dB.Wishlist.find().then((result) => {
                if (result) { // return updated wishlist
                    return {
                        statusCode: 200,
                        message: "Item Removed",
                        data: result
                    }
                } else {
                    return {
                        statusCode: 404,
                        message: 'Failed to fetch data'
                    }
                }
            })
        } else {
            return {
                statusCode: 404,
                message: ' Product not found'
            }
        }
    }
    )
}

module.exports = {
    getProducts,
    addToWishlist,
    getWishlist,
    deleteWishlist
}
