const express = require('express')
const cors = require('cors')
const dataServices = require('./services/dataServices')
const { request, response } = require('express')
const app = express()


app.use(express.json()) // json parser 

app.listen(3000, () => { // port setup
    console.log('EspeciaDb started at port 3000')
})

app.use(cors({
    origin: 'http://localhost:4200' // request orgin path from server
}))

// get products api 
app.get('/products', (request, respond) => {
    console.log('get all products request completed ')
    dataServices.getProducts().then((result) => {
        respond.status(result.statusCode).json(result) // data send to client
    })
})

//add to wish list
app.post('/addWish-list', (request, response) => {
    console.log('add wishlist success')
    dataServices.addToWishlist(
        request.body.id,
        request.body.title,
        request.body.price,
        request.body.description,
        request.body.category,
        request.body.image).then((result) => {
            response.status(result.statusCode).json(result)
        } )
})

// get wish list
 app.get('/wish-list',(request,response)=>{
    console.log("Wish list success")
    dataServices.getWishlist().then((data)=>{
        response.status(data.statusCode).json(data)
       // console.log(data)
    })

 })
// delete wishlist item
app.delete('/delete-wishlist-item/:id',(request,response)=>{
   // console.log(request.params.id)
    dataServices.deleteWishlist(request.params.id).then((result)=>{  // params fetch url id
        response.status(result.statusCode).json(result)
    })

})
