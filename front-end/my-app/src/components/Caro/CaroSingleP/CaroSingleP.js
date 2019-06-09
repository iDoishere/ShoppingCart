

import React, { Component } from 'react'
import { Button,Card } from 'react-bootstrap';
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
      <div className="bbb">

     
      <div ref={this.divTry} className="vd"   key={index}   
           role="menuitem"
           tabIndex="0"          
       >  
    <Card   >
     <Card.Img  style={{ width: '13rem'  }} src={product.photoData}   />
     <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Title>{product.price + '$'}</Card.Title>
    <Card.Title>{  'Amount:'  + product.num}</Card.Title>
   
    <Button variant="primary"  onClick={(event)=> {
      removeProduct(product)
      }}>Remove</Button>
  </Card.Body>
</Card>
       {/* <img 
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
      </div>          */}
   </div>   

   </div>
 
    )
  }
}
export default CaroSingleP;



 