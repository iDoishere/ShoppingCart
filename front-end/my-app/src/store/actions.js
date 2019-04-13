 
 export const LOGIN = "LOGIN";
export const MODAL = "MODAL";
export const REGISTER = "REGISTER";

   export const register = (obj) => {
  	return  function (dispatch) {
      return   fetch(`http://localhost:3000/users`, {
             method: 'POST', 
             body: JSON.stringify(obj),  
             headers:{
               'Content-Type': 'application/json'
             }
           }).then(res => res.json())
           .then(response =>  console.log(response.auth)  )
           .catch(error => console.error('Error:', error)); 
     }
   }
   export const modal = () => {
    return {type:MODAL}
}

  export const loginAuth =  (obj) => {   
	return  function (dispatch) {
    const auth = `Basic ${ btoa(`${obj.email}:${obj.pass}`)}`;
 
      fetch("http://localhost:3000/users/login", { //check if user in the db
      headers: new Headers({
        Authorization: auth
      })
    }).then(res => res.json())
      .then(res =>  {if(res.auth){
        dispatch({type:LOGIN,payload:res.auth})
      }else{
        console.log('11111')
      }}    )   
      .catch(res => alert('worng detalis')  )
    }
 }
