export const LOGIN = "LOGIN";
export const MODAL = "MODAL";

   
export   const modal = () => {
    return {type:MODAL}
}

 export const loginAuth =  (obj) => {
    
	return  function (dispatch) {

     return   fetch(`http://localhost:3000/users`, {
            method: 'POST', 
            body: JSON.stringify(obj),  
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(response => dispatch({type:LOGIN,payload:response})  )
          .catch(error => console.error('Error:', error));
 
    }
 }
