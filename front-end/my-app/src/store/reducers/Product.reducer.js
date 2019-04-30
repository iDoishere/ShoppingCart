import * as TypeactionProduct from '../actionsProduct'
import * as TypeactionLogout from '../actions.Logout'

const initialState = {
   productsResult :[],
    products:[],
    ifRmv:false
}

function productsReducer(state=initialState,action){
   
    switch(action.type){
        case TypeactionProduct.FETCH_IMG:
      
        return {
           
            productsResult: action.Product,
            products:state.products,
            ifRmv:false
        }
        case TypeactionProduct.PICK_PRODUCT:    
        const a  =[...state.products];
        a.push(action.product)
        return {
            productsResult:state.productsResult,
            products: a,
            ifRmv:false
    
           
        }      
        case TypeactionLogout.LOG_OUT:        
        return {
            products: [],
            productsResult:[],
            ifRmv:false
        } 
       
        case TypeactionProduct.RMV_PRODUCT:   

        const filterProducts = state.products.filter(product => product.id !== action.data.value.id) ;
         const ifrmv = !state.ifRmv
        
        return {
          ...state,
            products:filterProducts,
            ifRmv:ifrmv       
        }  
    }         
    return state
}
export default productsReducer;