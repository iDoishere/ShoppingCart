import React from 'react'

import Product from '../Product/Product'
import './ProductList.css'


 const ProductList = ({ProductList}) => {
 console.log(ProductList)
  return (
    <div className="cards">
    
      {
          ProductList.map((product,index) => { 
              return <Product 
              key={index}
              path={product.photoData}
              name={product.name}
              price={product.price}
              />
          })
      }
        <span className="cart"> </span>
    </div>
  )
}

export default ProductList;