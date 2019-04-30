
import {route} from './route'

export const PICK_PRODUCT = "PICK_PRODUCT";
 
export const FETCH_IMG = "FETCH_IMG";

export const RMV_PRODUCT = "RMV_PRODUCT";

export const fetchProducts = () =>{
   
    return function(dispatch){
        fetch(route('/products'))
        .then(res => res.json())
        .then(res =>     dispatch({type: FETCH_IMG   , Product:res})       )
    }
}

export const PickProduct = (product) => {
       return {type:PICK_PRODUCT,product:product}
}
export const removeProduct = (data) => {
    console.log(data)
    return {type:RMV_PRODUCT,data}
}