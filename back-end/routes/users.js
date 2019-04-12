var express = require('express');
var router = express.Router();
const dbService = require('../dbService')
const basicAuth = require('express-basic-auth');

router.use(async(req,res,next)=> {
  myService = new dbService();
  await myService.initDB()
  next()
})

async function  authorizer (email, password) {
  
  const currentUsers =  await myService.getAll('users')
  return currentUsers.some(user =>(user.email === email && user.pass === md5(password)  ) ) 
}

router.get('/login',basicAuth({ authorizer}) ,async function (req, res, next) {
   console.log('a1')
  res.status(200).send({"auth":true})
 

});

module.exports = router;

  // const result = await myService.insertOne(req.body, 'users')
// if(originalList.some(todo => action.todo == todo.value ))    
// return state.results;