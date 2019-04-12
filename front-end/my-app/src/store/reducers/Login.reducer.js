
import  * as actionsType    from '../actions'
 
const initialState = {
    isLoggedIn :false
}

function loginRecuer(state = initialState,action){
     switch(action.type){
         
         case actionsType.LOGIN:
      
console.log('55555555555a')
          let a = state.isLoggedIn;
        
          a=!a;
        return{
            isLoggedIn :a
        }
      
     }
    
     return state; 
  
}





export default loginRecuer;