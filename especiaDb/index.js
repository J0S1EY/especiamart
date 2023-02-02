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
app.post('/wish-list', (request, response) => {
    console.log('add wishlit success')
    console.log(request.body)
})

