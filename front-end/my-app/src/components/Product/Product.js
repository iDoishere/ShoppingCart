import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Product.css'
import $ from "jquery";

 const Product = ({product,pickedCard}) => {
 
  return (
    <div>

      
   
<figure className="snip1268">
  <div className="helper">
    <img src={product ? product.photoData :''} alt="sq-sample4"/>
    <div className="icons">
      <a href="#"><i className="ion-star"></i></a>
      <a href="#"> <i className="ion-share"></i></a>
      <a href="#"> <i className="ion-search"></i></a>
    </div>  
    {/* <a   class="add-to-cart">Add to Cart</a> */}
    <div className="item button-hand"  >
    <button className="button" onClick = {(event) => {
      pickedCard(product)
    }} >Click Me!
      <div className="hands"></div>
    </button>
  </div>
  </div>
  <figcaption>
    <h2>{product ? product.name : ' '}</h2> 
    <div className="price">{product ? product.price : ''} </div>
  </figcaption>
</figure>
 
 
    </div>
    // <Card className="card" >
    
    //   <CardBody className="cx">
    //   <CardImg className="cardImage" src={path} />
    //     <CardTitle className="text">{name}</CardTitle>
    //     <CardSubtitle className="text">{price} </CardSubtitle>
    //     <a className="btn1 button1" onClick ={() => {  
     
    //       }}   
    //      >Add to cart</a> 
       
    //   </CardBody>
    // </Card>
  )
}
 
export default Product;