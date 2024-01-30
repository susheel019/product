const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const Products = require("../BLL/productsBll");

// router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.post("/add", (req, res) => {
  let p = new Products();
  p.addProducts(req.body);
  res.json("products added successfully");
});

router.get("/", (req, res) => {
  let p = new Products();
  var product = p.getAllProducts();
  product.then(
    (success) => {
      res.json(success);
    },
    (err) => {
      console.log(err);
    }
  );
});

router.get("/search/:id", (req, res) => {
  let p = new Products();
  var product = p.getProductById(req.params.id);
  product.then(
    (success) => {
      res.json(success);
    },
    (err) => {
      console.log(err);
    }
  );
});

router.delete('/delete/:id' , (req , res)=>{
  let p = new Products();
  var product = p.deleteProductById(req.params.id);
  product.then( (success)=>{
    console.log(success);
    res.json("deleted successfully")
  });
});

router.put('/update/:id' , (req , res)=>{
  let p = new Products();
  var result = p.modifyProductsById(req.params.id , req.body);
  result.then( (result) =>{
    res.json(result)
  })
  

})

router.get('/category/:category' , (req , res) =>{
  let p = new Products();
  const category = req.params.category
  var products = p.getProductByCategory(category)
  products.then( (data)=>{
      res.json(data)
  } ,
  (err)=>{
    console.log(err);
  })
})
router.get('/getAllCategory' , (req , res)=>{
  let p = new Products();
  var categories = p.getCategories();
  categories.then( (category)=>{
    res.json(category)
  } , (err)=>{
    console.log(err);
  })
  
})

module.exports = router;
