import * as Typeaction from '../actionsProduct'

const initialState = {
    imagesResult :[]
}

function productsReducer(state=initialState,action){
     
    switch(action.type){
        case Typeaction.FETCH_IMG:
        return {
            ...state,
            imagesResult:state.imagesResult.concat(action.Product)

        }
         
    }
    return state; 
}
export default productsReducer;