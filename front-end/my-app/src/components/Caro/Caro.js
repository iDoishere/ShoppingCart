import React from 'react'
import CaroselProduct from './CaroselProduct/CaroselProduct'
import './Caro.css'

 function Caro({products,removeProduct,ifRmv}) {
console.log(ifRmv)
  return (
    <div className="caro" >
    {
               products.length === 0 ?
                '':<CaroselProduct
                products={products}       
                removeProduct={(product) => removeProduct(product)}
                ifRmv={ifRmv}
              
                />
    } 
  
    </div>
  )
}
export default Caro;


