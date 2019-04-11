
import  * as actionsType    from '../actions'
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
    }
    return state;  
}


export default openModal;