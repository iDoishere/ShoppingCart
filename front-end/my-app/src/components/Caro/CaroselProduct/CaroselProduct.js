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
      
          
          <Coverflow className="111"
          width={800}
          height={480}
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

// //  import React from 'react'
 
//  import React, { Component } from 'react'
//  import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
//  import './CaroselProduct.css'
//   var Carousel = require('react-responsive-carousel').Carousel;
//  class CaroselProduct extends Component {
//     constructor(props) {
//         super(props);
//     }
    
//    render() {
//        const { 
//         products
//        } = this.props;
//      return (
       
            
//          <div className="aaa"> 
//      <Carousel  thumbWidth={10}  showArrows={true}
//  centerMode={true}
//   showThumbs={true}
//   showIndicators={true}
 
//   >
//       {
//           products.map((product,index) => {
//             return (  <div key={index} >       
//             <img  src={product.photoData}  ></img>
//             <p className="legend">{product.price}</p>
//             </div>  
//           )})
//       }
// </Carousel>

//        </div>
//      )
//      }
 
//     }
//  export default CaroselProduct;

 