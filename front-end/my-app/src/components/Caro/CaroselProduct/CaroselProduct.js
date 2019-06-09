import React, { Component } from 'react'
import './CaroselProduct.css'
import CaroSingleP from '../CaroSingleP/CaroSingleP'
var Coverflow = require('react-coverflow');

class CaroselProduct extends Component {
  render() {
    const {
   products,
   removeProduct,
   ifRmv,
    } = this.props;
                 
    return (
      <div  >        
          <Coverflow className="Coverflow"
          width={800}
          height={580}
          displayQuantityOfSide={3}
          navigation={false}
          enableHeading={false}
        >
         {
                products? products.map((product,index) => {
                  return (           
                   <CaroSingleP ifRmv={ifRmv}
                   product={product} index={index}
                   removeProduct= {(product) =>removeProduct(product)}   
                   
                   />
                )}):''
            }
        </Coverflow> 
      </div>
    )
  }
}
export default CaroselProduct;
