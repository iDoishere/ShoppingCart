import React, { Component } from 'react'
import ProdcutList from '../../components/ProductList/ProductList'
import { connect } from 'react-redux'
import * as Typeaction from '../../store/actionsProduct'
import Par from '../../components/Par/Par'
import Header from '../../components/Header/Header'
import { ParallaxProvider } from 'react-scroll-parallax';
 
 class MainApp extends Component {


    async componentDidMount  (){
        this.props.fetchProducts(); 
        }
      
  render() {
      
    const {
      imagesResult
    } =this.props;

    return (
      <div>
         <Header/>

         <ParallaxProvider>
         <Par imagesResult={imagesResult}/>
          </ParallaxProvider>
       
        {/* <ProdcutList  ProductList={imagesResult}   /> */}
      </div>
    )
  }
}


const mapStateToProps = state => {
          console.log( state.fetchProduct.imagesResult)
    return {
       
      imagesResult : state.fetchProduct.imagesResult
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(Typeaction.fetchProducts()),// getting value from ui and passing it to actions
 

    };
};




 
export default connect(mapStateToProps, mapDispatchToProps)(MainApp);