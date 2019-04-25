

import React, { Component } from 'react'
 
import { Form,Button } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBIcon,MDBCardHeader } from 'mdbreact';
import './Login.css'
 import {Link} from 'react-router-dom'
 class Login extends Component {
    email = React.createRef();
    pass = React.createRef();
   render() {
       const {
        loginClicked,
        openModal,
     
       }= this.props;
     return (
       <div  >
       

      
 
 
       <div className="divLogin">
    <MDBContainer>
      <MDBRow>
        <MDBCol >
          <form>
          <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>       
            <div className="grey-text">
              <MDBInput
                 ref={this.email}
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                ref={this.pass}
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
              />
              
            </div>
            
          </form>      
        </MDBCol>
      </MDBRow> 
          <div className="btns">
                  <MDBBtn  onClick = {()=> {
                     console.log(this.email.current.state.innerValue)
      let email = this.email.current.state.innerValue;
      let pass = this.pass.current.state.innerValue;
      const obj = {email :email,pass:pass}
      loginClicked(obj);
       }}
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign in
                </MDBBtn>
 
  
  <a className="button" variant="primary"onClick = {()=> {
    openModal()
  }} >  
 
    Register
  </a>
</div>  
<div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
               
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
    </MDBContainer>
       </div>
       </div>
     )
   }
 }
 export default Login;





 
// class Login extends Component {
//     email = React.createRef();
//   render() {
    
//     const {
//       loginClicked,
//       openModal
//      }= this.props;
//     return (
//       <div className="login">
//              <div className="divLogin">
      
//       <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <form>
//             <p className="h5 text-center mb-4">Sign in</p>
//             <div className="grey-text">
//               <MDBInput
//                 ref={this.email}
//                 label="Type your email"
//                 icon="envelope"
//                 group
//                 type="email"
//                 validate
//                 error="wrong"
//                 success="right"
//               />
//               <MDBInput
//                 label="Type your password"
//                 icon="lock"
//                 group
//                 type="password"
//                 validate
//               />
//             </div>
//             <div className="text-center">
//               <MDBBtn  onClick = {()=> {   
//                 console.log(this.email.current.state.innerValue)
//                  }}> >Login</MDBBtn>
//             </div>
//             <div className="btns">

//   <a className="button" variant="primary"  onClick = {()=> {
//       let email = this.refs.email.value;
//       let pass = this.refs.pass.value;
//       const obj = {email :email,pass:pass}
//       loginClicked(obj);
//   }}>
//     Login In
//   </a>

//   <a className="button" variant="primary"  onClick = {()=> {
//        openModal()
//   }}>
//     Register
//   </a>
// </div> 
//           </form>
          
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//     </div> 
//     </div> 
//     )
//   }
// }
// export default  Login;
  





