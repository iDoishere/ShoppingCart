

import React, { Component } from 'react'
import './CaroSingleP.css'
class CaroSingleP extends Component {
  
  divTry = React.createRef();

  render() {
    const {
      removeProduct,
      ifRmv
      ,product
      ,index
    } = this.props;

    const status =  ifRmv ? 'slideoutbckcenter': 'nothing'
 
   return (
  
      <div ref={this.divTry}   key={index}   
           role="menuitem"
           tabIndex="0"          
       >  
       <img 
      src={product.photoData}
      alt='title or description'
      style={{    width: '80%' }}
       />
      <div className="contentCard">
      <div className="name">
      <h6>{product.name}</h6>
      </div>
      <div className="price">
      <h6>{product.price + '$'}</h6>
      <span>{product.num}</span>  
        </div>          
      <button className="btn rounded"><span className="text-green"
       onClick={(event)=> {
      removeProduct(product)
      }}>Remove</span></button>   
      </div>         
   </div>   
 
    )
  }
}
export default CaroSingleP;



 