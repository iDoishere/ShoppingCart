var express = require('express');
const router = express.Router();
const fs = require('file-system');
const path = require("path");
const storagePath = path.join(__dirname, '../storeimages');
const  dbService =require('../dbService')

 


router.use(async(req,res,next)=>{
myService = new dbService();
await myService.initDB();
next()
})

router.get('/',async function (req,res,next){
  
  const currentProdcuts =  await myService.getAll('products')
console.log(currentProdcuts)
  const result = currentProdcuts.map(product => {
    
    const data = fs.readFileSync(product.path, 'utf8');
  
    return { photoData: data,name:product.name, price:product.price };
  });
  res.send(result);
})
module.exports = router;