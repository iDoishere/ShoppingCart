
import  * as actionsType    from '../actions'
 
const initialState = {
    isLoggedIn :false
}

function loginRecuer(state = initialState,action){
     switch(action.type){     
         case actionsType.LOGIN: 
      
      const result= action.payload ? !state.isLoggedIn:state.isLoggedIn
           
        return{
            isLoggedIn :result
        }
      
     }
    
     return state; 
  
}





export default loginRecuer;