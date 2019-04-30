import React from 'react'

import Product from '../Product/Product'
import './ProductList.css'


 const ProductList = ({productList,pickedCard}) => {
 
  return (
    <div className="cards">
    
      {
          productList.map((product,index) => { 
              return <Product 
              key={index}
              product={product}
              pickedCard={(event) => pickedCard(event)}
              path={product.photoData}
              // name={product.name}
              // price={product.price}
              />
          })
      }
        <span className="cart"> </span>
    </div>
  )
}

export default ProductList;