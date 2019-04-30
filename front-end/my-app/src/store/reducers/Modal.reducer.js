
import  * as actionsType    from '../actions'
import  * as actionsTypeLogout    from '../actions.Logout'
const initialState = {
    show :false
}

function openModal(state=initialState,action){
  
    switch(action.type){
     
        case actionsType.MODAL:
      
         let answer =  state.show ;
         answer =  !answer
        return{
           show:answer
        }
        case actionsTypeLogout.LOG_OUT:
       return{
          show:false
       }
      
    }
    return state;  
}


export default openModal;