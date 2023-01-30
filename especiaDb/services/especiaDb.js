
const mongoose = require('mongoose')
// mongose connect to database
mongoose.connect('mongodb://127.0.0.1/especiaMart', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log(`Error connecting to the database: ${err}`);
  } else {
    console.log('Successfully connected to especiaMart database');
  }
});


const Products = mongoose.model('Products', { // mongoose model 
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number,
  }
})

module.exports = {
  Products
}
