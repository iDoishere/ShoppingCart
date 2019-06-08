import React, { Component } from 'react'
import * as TypeactionProduct from '../../store/actionsProduct'
import * as TypeactionLogout from '../../store/actions.Logout'
import ProdcutList from '../../components/ProductList/ProductList'
import { connect } from 'react-redux'
import Par from '../../components/Par/Par'
import Login from '../../components/Login/Login'
import { ParallaxProvider } from 'react-scroll-parallax';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

 class MainApp extends Component {

    async componentDidMount  (){
        this.props.fetchProducts(); 
        }
      
  render() {
      
    const {
      imagesResult,
      pickedCard,
      products,
      sighOut,
      removeProduct,
      ifRmv,
      clickedSearch,
      sortByPrice
    } =this.props;

    return (
      <div>
         <ParallaxProvider>
         <Par imagesResult={imagesResult}   pickedCard={pickedCard} products={products}
           sighOut={sighOut}    
           removeProduct={removeProduct}
           ifRmv={ifRmv}
           clickedSearch={clickedSearch}
           sortByPrice={sortByPrice}
         />
          {/* <Route path="/Login" component={Login} /> */}
          </ParallaxProvider>
      </div>
    )
  }
}

const mapStateToProps = state => {
       console.log(state)
    return {
      products:state.fetchProduct.products,
      imagesResult : state.fetchProduct.productsResult,
      ifRmv:state.fetchProduct.ifRmv
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(TypeactionProduct.fetchProducts()),// getting value from ui and passing it to actions
        pickedCard:(product) => dispatch(TypeactionProduct.PickProduct(product) ),
        sighOut:() => dispatch(TypeactionLogout.logOut()  ),
       
        removeProduct:(product) => dispatch(TypeactionProduct.removeProduct({value :product})),
        clickedSearch:(searchText) =>dispatch(TypeactionProduct.searchProduct(searchText)),
        sortByPrice:(sort) =>dispatch(TypeactionProduct.sortProducts(sort))
       
      };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainApp);