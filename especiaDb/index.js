const express = require ('express')
const cors = require ('cors')
const dataServices = require('./services/dataServices')
const app=express()


app.use(express.json()) // json parser 

app.listen(3000, () => { // port setup
    console.log('EspeciaDb started at port 3000')
})

app.use(cors({
    origin: 'http://localhost:4200'
}))

// get products api 
app.get('/products', (request, respond) => {
    console.log('get all products request completed ')
    dataServices.getProducts().then((result) => {
        respond.status(result.statusCode).json(result)
    })
})

