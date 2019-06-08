import React from 'react'
import CaroselProduct from './CaroselProduct/CaroselProduct'
import './Caro.css'
import NoResultCaro from '../NoResultCaro/NoResultCaro'
 function Caro({products,removeProduct,ifRmv}) {
console.log(products)
  return (
    <div className="caro" >
    {
               products.length === 0 ?
               <NoResultCaro></NoResultCaro>:<CaroselProduct
                products={products}       
                removeProduct={(product) => removeProduct(product)}
                ifRmv={ifRmv}
              
                />
    } 
  
    </div>
  )
}
export default Caro;


