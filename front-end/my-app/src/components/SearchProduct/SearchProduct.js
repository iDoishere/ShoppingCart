import React, { Component } from 'react'
import './SearchProduct.css'
import {   FormGroup, Label, CustomInput } from 'reactstrap';

class SearchProduct extends Component {
  
    input = React.createRef()

  render() {
 
      const {
        clickedSearch,
        sortByPrice
      } = this.props;
    return (
      <div >
          
     <div className="SearchDiv">
     <div>
      <h2  className="searchTitle">Search Your Item</h2>
      </div>

      <div>
      <input  className="input"
        type="text" 
        placeholder="Search Product"                 
        onChange = {() => clickedSearch(this.input.current.value)}
        ref = {this.input}
         />  
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