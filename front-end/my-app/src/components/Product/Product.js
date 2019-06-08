import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './Product.css'
import $ from "jquery";

const Product = ({ product, pickedCard, myStory }) => {

  return (
    <div>

      <figure className="snip1268">
        <div className="helper">
          <img className="productImg" src={product ? product.photoData : ''} alt="sq-sample4" />
          <div className="icons">
            <a href="#"><i className="ion-star"></i></a>
            <a href="#"> <i className="ion-share"></i></a>
            <a href="#"> <i className="ion-search"></i></a>
          </div>
          {/* <a   class="add-to-cart">Add to Cart</a> */}
          <div className="item button-hand"  >
            <button className="button" onClick={(event) => {
              pickedCard(product); scrollToContent2(myStory, { offset: 0, align: 'top', duration: 1000 })
            }} >Add Me!
      <div className="hands"></div>
            </button>
          </div>
        </div>
        <figcaption>
          <h2>{product ? product.name : ' '}</h2>
          <div className="price">{product ? product.price + '$' : ''} </div>
        </figcaption>
      </figure>
    </div>
  )
}
function scrollToContent2(MyStory2) {
  MyStory2.scrollIntoView({ behavior: 'smooth' });
}
export default Product;