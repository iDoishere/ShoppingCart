import * as TypeactionProduct from '../actionsProduct'
import * as TypeactionLogout from '../actions.Logout'

const initialState = {
   productsResult :[],
    products:[],
 
}
let tempArr = [];
function productsReducer(state=initialState,action){
   
    switch(action.type){
        case TypeactionProduct.FETCH_IMG:
        tempArr=[...action.Product];
        return {        
            productsResult: action.Product,
            products:state.products, 
        }
        case TypeactionProduct.PICK_PRODUCT:    
        const listTemp  =[...state.products];
        listTemp.push(action.product)
        return {
            productsResult:state.productsResult,
            products: listTemp,        
        }      
        case TypeactionLogout.LOG_OUT:        
        return {    
            productsResult:[],
            products: []
     
        }      
        case TypeactionProduct.RMV_PRODUCT:   
        const filterProducts = state.products.filter(product => product.id !== action.data.value.id) ;
             
        return {
          ...state,
            products:filterProducts,           
        }  
        case TypeactionProduct.SEARCH_PRODUCT:
            const filter = tempArr.filter(product => {
                return product.name.toLowerCase().includes(action.searchText)
            })
        return {
            productsResult:filter,
            products: state.products
        }
    case TypeactionProduct.SORT:
  
    console.log('645555555555555')
        for(let i =0;i<tempArr.length;i++){
            tempArr.sort(sortNumber);
        }
    return {
        productsResult: tempArr,
        products: state.products
      }
    }         
    return state
}
function sortNumber(a,b) {
    return a.price - b.price;
}
export default productsReducer;