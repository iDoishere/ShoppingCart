import React from 'react'
import Product from '../Product/Product'
import './ProductList.css'

const ProductList = ({productList,pickedCard,myStory}) => {
  
  return (
    <div className="cards">
      {  
        productList.length === 0 ? "NO Result":
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
       
    </div>
  )
}

export default ProductList;