import {route} from './route'


 export const LOGIN = "LOGIN";
export const MODAL = "MODAL";
export const REGISTER = "REGISTER";
export const SHOW_BANNER = "SHOW_BANNER";
export const UNSHOW_BANNER = "UNSHOW_BANNER";


   export const register = (obj) => {
  	return  function (dispatch) {
      return   fetch(route('/users') , {
             method: 'POST', 
             body: JSON.stringify(obj),  
             headers:{
               'Content-Type': 'application/json'
             }
           }).then(res => res.json())
           .then(response => {if(response.auth){
            dispatch({type:SHOW_BANNER,msg:'your are In'})
          }else{             
            dispatch({type:SHOW_BANNER,msg :'one or more fields incorrect'}
            
           ) } 
           setTimeout(function(){  
            dispatch({type:UNSHOW_BANNER})

       }, 3000)
           
          
          })
         
       
         
      //       dispatch({type:SHOW_BANNER,msg :'one or more fields incorrect'}
      //      ),
      //      setTimeout(function(){  
      //       dispatch({type:UNSHOW_BANNER})

      //  }, 3000) 
            
           
     }
   }
   export const modal = () => {
    return {type:MODAL}
   }
  export const loginAuth =  (obj) => {   
	return  function (dispatch) {
    const auth = `Basic ${ btoa(`${obj.email}:${obj.pass}`)}`;
 
      fetch(route("/users/login"), { //check if user in the db
      headers: new Headers({
        Authorization: auth
      })
    }).then(res => res.json())
      .then(res =>  {if(res.auth){
        dispatch({type:LOGIN,payload:res.auth})}})      
      .catch(res =>  dispatch({type:SHOW_BANNER,msg :'one or more fields incorrect'}))
      setTimeout(function(){  
            dispatch({type:UNSHOW_BANNER})

       }, 4000);

    }
 }
