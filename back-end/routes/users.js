var express = require('express');
var router = express.Router();
const db = require('../database.json')
const dbService = require('../dbService')
 

router.use(async(req,res,next)=> {
  myService = new dbService();
  await myService.initDB()
  next()
})


router.post('/',async function (req, res, next) {
  //  const auth= db.users.some(user =>(user.email === req.body.email && user.pass === req.body.pass)) 
  // if(auth){
  //   console.log("correct")
  //   res.status(200).send({"auth":true})
  // }
  console.log(req.body)
  const result = await myService.insertOne(req.body, 'users')

});

module.exports = router;
