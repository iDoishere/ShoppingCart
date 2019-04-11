
import  * as actionsType    from '../actions'
 
const initialState = {
    person :''
}


function loginRecuer(state = initialState,action){
     switch(action.type){
         case actionsType.LOGIN:
         console.log('123456')
        return{
            person :''
        }
     }
    
   
  
}





export default loginRecuer;