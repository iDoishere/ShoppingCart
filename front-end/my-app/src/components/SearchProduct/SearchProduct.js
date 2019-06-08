import React, { Component } from 'react'
import './SearchProduct.css'
import {   FormGroup, Label, CustomInput } from 'reactstrap';
 
import Plx from 'react-plx';

class SearchProduct extends Component {
  
    input = React.createRef()

  render() {
    const AnimationText = [
      {
        start: 'self',
        startOffset: 100,
        duration: 370,
        easing: [0.25, 4.1, 0.9, 1.5],
        properties: [
          {
            startValue: 90,
            endValue: 0,
            property: 'rotate',
          },
          {
            startValue: 0,
            endValue: 1,
            property: 'scale',
          },
        ],
      },
    ];
    const AnimationTexth2 = [
      {
        start: 'self',
        startOffset: 100,
        duration: 370,
        easing: [0.25, 0.1, 0.6, 1.5],
        properties: [
          {
            startValue: 90,
            endValue: 0,
            property: 'rotate',
          },
          {
            startValue: 0,
            endValue: 1,
            property: 'scale',
          },
        ],
      },
    ];

  
      const {
        clickedSearch,
        sortByPrice
      } = this.props;
    return (
      <div >
          
     <div className="SearchDiv">
     <div>
     <Plx
        className='Phone'
        parallaxData={ AnimationTexth2 }
      >
         <h2  className="searchTitle">Search Your Item</h2>
      </Plx>
   
      </div>

      <div>

      <Plx
        className='Phone'
        parallaxData={ AnimationText }
      >
          <input  className="input"
        type="text" 
        placeholder="Search Product"                 
        onChange = {() => clickedSearch(this.input.current.value)}
        ref = {this.input}
         /> 
      </Plx>
    
      </div>
      <div className="sort">
      <FormGroup>
          <Label className="searchTitle">Sort By</Label>

          <CustomInput onChange={() =>sortByPrice()} type="select" id="exampleCustomSelect" name="customSelect">
          <option> </option> 
         <option> Price</option>
          </CustomInput>
        </FormGroup>
      </div>
   </div>
 
  
 
      </div>
    )
  }
}

export default SearchProduct;