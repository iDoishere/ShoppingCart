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
  let aaa='';

    if(!checkMissingText(currentObj)){
       res.send({"auth":false,type:aaa}) 
       return;   // to avoid res handle eroor
    }

    if(!validateEmail(currentObj.email)){
      res.send({"auth":false}) 
      return;
    }
    
    if(checkUserExits(currentUsers,currentObj)){
      res.send({"auth":false}) 
      return;
    }
    else{
      currentObj.pass = md5(currentObj.pass);
      currentObj.rePass = md5(currentObj.rePass);
    //  const result = await myService.insertOne(currentObj, 'users')
      res.send({"auth":true}) 
      return;
    }
 })


 function checkUserExits(currentUsers,currentObj){
   let ifTrue=false;
  for (let user of currentUsers) { 
  if(user.email != currentObj.email){
    ifTrue = false;
   }  else{
    ifTrue = true;
   }
  }
  return ifTrue;
}
function checkMissingText(currentObj){
  if(currentObj.name === '' ||currentObj.email === '' ||currentObj.pass === '' ||currentObj.rePass === '' ){
    aaa='checkMissingText'
    return false;
}
if(currentObj.pass.length < 8  || currentObj.rePass.length < 8){
  return false;
}
if(currentObj.pass !== currentObj.rePass){
  return false;
}
return true;
}
 function validateEmail(email) {
   console.log(email)
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const answer= re.test(String(email).toLowerCase()); 
 return answer;
}
module.exports = router;

  //
// if(originalList.some(todo => action.todo == todo.value ))    
// return state.results;