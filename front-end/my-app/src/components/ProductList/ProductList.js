import React from 'react'

import Product from '../Product/Product'
import './ProductList.css'


 const ProductList = ({productList,pickedCard,myStory}) => {
 console.log(myStory)
  return (
    <div className="cards">
   
      {
          productList.map((product,index) => { 
              return <Product 
              key={index}
              product={product}
              pickedCard={(event) => pickedCard(event)}
              path={product.photoData}
              myStory={myStory}
              />
          })
      }
        <span className="cart"> </span>
    </div>
  )
}

export default ProductList;