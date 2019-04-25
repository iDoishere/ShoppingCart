
import {route} from './route'


export const FETCH_IMG = "FETCH_IMG";

export const fetchProducts = () =>{
    console.log('asd')
    return function(dispatch){
        fetch(route('/products'))
        .then(res => res.json())
        .then(res =>     dispatch({type: FETCH_IMG   , Product:res}) )
    }
}