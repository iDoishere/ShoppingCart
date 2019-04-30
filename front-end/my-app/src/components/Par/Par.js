 


import React, { Component } from 'react'
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import './Par.css'
import ProductList from '../ProductList/ProductList'
import Caro from '../Caro/Caro'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


  
 class Par extends Component {
  constructor(props) {
    super(props);
    this.MyStory = React.createRef();


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

    const {
      pickedCard,
      products,
      sighOut,
      removeProduct,
      ifRmv,
      divTry
    } =this.props;

    const styles = {
      fontFamily: "sans-serif",
     textAlign: "center",
    
    };
  
     const spanMid = {
       background:'transparent',
         fontSize:'25px',
      color:'#f7f7f7',
      border:'none'
   
       };
    const image1 =
      "http://www.w3schools.com/howto/img_parallax.jpg";
   const image2 =
    "https://uscstoryspace.com/2017-2018/askenaiz/Fall_Midterm/midterm_page/img/img_parallax3.jpg"

    return (
      <div>
         <div className="a1" >
         <Navbar  color="light" light expand="md">
          <NavbarBrand  >Buy Me</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>    
            <div className="all">
            <div className="item1">
            <NavItem>
              
              <a onClick={()=> {scrollToContent(this.MyStory,{offset: 0, align: 'top', duration: 1000})}} className="example_b"   rel="nofollow noopener">
            go to SHOP</a>    
              </NavItem> 
            </div>
  
        
        
          <div>
          <NavItem>
          <div>
                <Link className="bb" to="/Login">
                <div>
                <p onClick={()=>{sighOut()}  } className="example_b" >
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
   
   
       <Parallax className="bgimg1" bgImage={image1} style={{ height: 700,opacity:0.6 }}  strength={500}>  
        <div style={{ height: 700 }}>
       <div className="caption">
        <span  strength={500}>Buy Me</span>
        </div>
         </div>
      </Parallax>
       
   
   
     <div ref={(MyStory) => { this.MyStory = MyStory; }}>
     <ProductList   productList={this.props.imagesResult}      pickedCard={pickedCard}/>
      </div>
       
         
  
   
       <Parallax className="bgimg2" bgImage={image2}  strength={ 500}>  
      <div  style={{ height: 400 }}>
        <div className="caption">
         <span style={spanMid}>Fasion</span>
        </div >
    
       </div>
    
      </Parallax>  
      <Caro  ifRmv={ifRmv} products={products}  removeProduct={removeProduct}  />


       {/* <div style={aa}>
       <h3  >Parallax Demo</h3>
       <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
      </div> */}
        </div>
    
      </div>
    )
  }
}
function scrollToContent( MyStory) {
 
  MyStory.scrollIntoView({behavior: 'smooth'});
}





export default Par;
 {/* <Parallax bgImage={image1} style={{ height: 700,opacity:0.6 }}  strength={500}>  
      <div style={{ height: 700 }}>
         <div class="caption">
       <span class="border" strength={500}>Buy Me</span>
        </div>
        </div>
       </Parallax> */}
     
      {/* <Parallax
         bgImage={image4}
         strength={200}
         renderLayer={percentage => (
           <div>
             <div
               style={{
                 position: "absolute",
                 background: `rgba(255, 125, 0, ${percentage * 1})`,
                 left: "50%",
                 top: "50%",
                 borderRadius: "50%",
                 transform: "translate(-50%,-50%)",
                 width: percentage * 500,
                 height: percentage * 500
               }}
             />
           </div>
         )}
       >
         <div style={{ height: 500 }}>
           <div style={insideStyles}>renderProp</div>
         </div>
       </Parallax>   */}






// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center",
  
// };
 
//   const spanMid = {
//    background:'transparent',
//      fontSize:'25px',
//   color:'#f7f7f7',
//   border:'none'
 
//     };
// const image1 =
//   "http://www.w3schools.com/howto/img_parallax.jpg";
// const image2 =
// "https://uscstoryspace.com/2017-2018/askenaiz/Fall_Midterm/midterm_page/img/img_parallax3.jpg"

//  const image3 =
//   "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
// const image4 =
//   "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
//   const copy = 'Parallax'.split('');
// const Par = ({imagesResult}) => (


  
//   <div style={styles}>
   
   
   
//     <Parallax className="bgimg1" bgImage={image1} style={{ height: 700,opacity:0.6 }}  strength={500}>  
//       <div style={{ height: 700 }}>
//       <div class="caption">
//      <span  strength={500}>Buy Me</span>
//       </div>
//       </div>
//     </Parallax>
    


//     <div ref="hello">

//    <ProductList id="example" ProductList={imagesResult}/>
//       </div>
    
      
    

//     <Parallax className="bgimg2" bgImage={image2}  strength={ 500}>  
//     <div  style={{ height: 400 }}>
//       <div class="caption">
//      <span   style={spanMid}>222222e</span>
//       </div>
//       </div>
//     </Parallax>

 

    {/* <div style={aa}>
    <h3  >Parallax Demo</h3>
    <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
   </div> */}

  //  <Parallax bgImage={image1} style={{ height: 700,opacity:0.6 }}  strength={500}>  
  //     <div style={{ height: 700 }}>
  //     <div class="caption">
  //    <span class="border" strength={500}>Buy Me</span>
  //     </div>
  //     </div>
  //   </Parallax>
  //   <h1 >| | |</h1>
    {/* <Parallax
      bgImage={image4}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>renderProp</div>
      </div>
    </Parallax> */}
   
    {/* <div style={{ height: 500 }} />
    <h2>{"\u2728"}</h2> */}
//   </div>
// );
 
//   export default Par;