
import React, { Component } from 'react'
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import './Par.css'
import ProductList from '../ProductList/ProductList'
import Caro from '../Caro/Caro'
import SearchProduct from '../SearchProduct/SearchProduct'
import { BrowserRouter as Router, Link } from "react-router-dom";
 
import Plx from 'react-plx';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
class Par extends Component {
  constructor(props) {
    super(props);
    this.MyStory = React.createRef();
    this.MyStory2 = React.createRef();


    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const phoneData = [
      {
        start: 'self',
        startOffset: 100,
        duration: 400,
        easing: [0.25, 0.1, 0.6, 0.1 ],
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
      pickedCard,
      products,
      sighOut,
      removeProduct,
      ifRmv,
      clickedSearch,
      sortByPrice
    } = this.props;


    const spanMid = {
      background: 'transparent',
      fontSize: '25px',
      color: '#f7f7f7',
      border: 'none'

    };
    const image1 =
      "http://www.w3schools.com/howto/img_parallax.jpg";
    const image2 =
      "https://uscstoryspace.com/2017-2018/askenaiz/Fall_Midterm/midterm_page/img/img_parallax3.jpg"

      const image3 =
      "https://www.ie.edu/insights/wp-content/uploads/2017/03/La-moda-de-consumo-rapido-llega-para-quedarse.jpg"

    return (
      <div>
        <div className="a1" >
          <Navbar color="light" light expand="md">
            <NavbarBrand  >  <p className="a11">XShop - Best shopping Expireince</p>
           </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <div className="all">
                  <div className="item1">
                    <NavItem>
                      <a onClick={() => { scrollToContent(this.MyStory, { offset: 0, align: 'top', duration: 1000 }) }} className="btnsNavbar" rel="nofollow noopener">
                        go to SHOP</a>
                    </NavItem>
                  </div>
                  <div className="item2">
                    <NavItem>
                      <a onClick={() => { scrollToContent2(this.MyStory2, { offset: 0, align: 'top', duration: 1000 }) }} className="btnsNavbar" rel="nofollow noopener">
                        My Store</a>
                    </NavItem>
                  </div>
                  <div className="item3">
                    <NavItem>
                      <div >
                        <Link  to="/Login">
                          <div>
                            <p onClick={() => { sighOut() }} className="btnsNavbar" >
                              Sighout</p>
                          </div>
                        </Link>
                      </div>
                    </NavItem>
                  </div>
                </div>
              </Nav>
            </Collapse>
          </Navbar>
          <Parallax className="bgimg1" bgImage={image1} style={{ height: 500, opacity: 0.6 }} strength={500}>
        
          </Parallax >

          <Parallax   bgImage={image3} style={{ height: 500   }} strength={500} >
          <div style={{ height: 700 }}>
              <div className="caption">
                <span strength={500} className="caption"  >
            
      <Plx
        className='Phone'
        parallaxData={ phoneData }
      >
        <p >The Best Shopping Experience</p>

      </Plx>
                </span>
              </div>
            
            </div>
          
          </Parallax>
  


          {/* <Plx
        className='Phone'
        parallaxData={ phoneData }
      >
        <p >The Best Shopping Experience</p>

      </Plx> */}


      
          <div className="search" >
            <SearchProduct sortByPrice={sortByPrice} clickedSearch={clickedSearch} />
          </div>
          <div ref={(MyStory) => { this.MyStory = MyStory; }}>
            <ProductList myStory={this.MyStory2} productList={this.props.imagesResult} pickedCard={pickedCard} />
          </div>
          <Parallax className="bgimg2" bgImage={image2} strength={500}>
            <div style={{ height: 400 }}>
              <div className="caption">
                <span style={spanMid}>Fasion</span>
              </div >
            </div>
          </Parallax>
          <div ref={(MyStory2) => { this.MyStory2 = MyStory2; }}>
            <Caro ifRmv={ifRmv} products={products} removeProduct={removeProduct} />
          </div>
        </div>
      </div>
    )
  }
}
function scrollToContent(MyStory) {
  MyStory.scrollIntoView({ behavior: 'smooth' });
}
function scrollToContent2(MyStory2) {
  MyStory2.scrollIntoView({ behavior: 'smooth' });
}
export default Par;
