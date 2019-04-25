import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Product.css'
import $ from "jquery";

 const Product = ({path,name,price}) => {
console.log(path)
  return (
    <div>

      
   
<figure class="snip1268">
  <div class="helper">
    <img src={path} alt="sq-sample4"/>
    <div class="icons">
      <a href="#"><i class="ion-star"></i></a>
      <a href="#"> <i class="ion-share"></i></a>
      <a href="#"> <i class="ion-search"></i></a>
    </div>  
    {/* <a   class="add-to-cart">Add to Cart</a> */}
    <div class="item button-hand"  >
    <button className="button">Click Me!
      <div class="hands"></div>
    </button>
  </div>
  </div>
  <figcaption>
    <h2>{name}</h2> 
    <div class="price">$65.00 </div>
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