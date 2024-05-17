var express = require('express');
var router = express.Router();
var productHelper = require('../Helpers/product-helpers')


/* GET home page. */
router.get('/', function (req, res, next) {
  productHelper.productList().then(async (products) => {
    console.log(products)
   
  
    
    res.render('index', { products})
   
   
   
    
  })
});

module.exports = router;
