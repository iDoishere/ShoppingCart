var express = require('express');
var router = express.Router();
const dbService = require('../dbService')
const basicAuth = require('express-basic-auth');
var md5 = require('md5');

let currentUsers=null;

router.use(async(req,res,next)=> {
  myService = new dbService();
  await myService.initDB()
  currentUsers =  await myService.getAll('users')
  next()
})

  function  authorizer (email, password) { 
  return  currentUsers.some(user => user.email === email && user.pass == md5(password)) 
}

router.get('/login',  basicAuth({ authorizer}) , function (req, res, next) { 
  res.status(200).send({"auth":true})
});



 router.post('/', async function(req,res,next){
 const currentObj = req.body;
 const currentUsers =  await myService.getAll('users')
  

    if(!checkMissingText(currentObj)){
       res.send({"auth":false}) 
       return;
    }

    if(!validateEmail(currentObj.email)){
      res.send({"auth":false}) 
    }
//  for (let user of currentUsers) {
//   if(user.email !=currentObj.email){
//     currentObj.pass = md5(currentObj.pass);
//     currentObj.rePass = md5(currentObj.rePass);
//     // const result = await myService.insertOne(currentObj, 'users')
//     res.send({"auth":true})
//   }else{
//     res.send({"auth":false})
//   }
// }





 
 })
function checkMissingText(currentObj){
  if(currentObj.name === '' ||currentObj.email === '' ||currentObj.pass === '' ||currentObj.rePass === '' ){
    return false;
}
return true;
}



 function validateEmail(email) {
   console.log(email)
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const a= re.test(String(email).toLowerCase());
  console.log(a)
 return a;
}
module.exports = router;

  //
// if(originalList.some(todo => action.todo == todo.value ))    
// return state.results;