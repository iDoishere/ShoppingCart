

import React, { Component } from 'react'
 
import { Form,Button } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import './Login.css'
import Modal from '../Modal/Modal'

// class Login extends Component {
//       email = React.createRef();
//       pass = React.createRef();
 

//   render() {
//     const {
//       loginClicked
//      }= this.props;
//     return (
//       <div>
//          <div  className="container">
//        <MDBContainer >
//         <MDBRow>
//              <MDBCol>
//              <form  >
//               <p className="h5 text-center mb-4">Sign in</p>
//                <div className="grey-text">
//                <Form.Control ref = 'email' type="email" placeholder="Enter email" />
//                 {/* <MDBInput
//                          ref = 'email'
//                    label="Type your email"
//                    icon="envelope"
//                    group
//                    type="email"
//                    validate
//                    error="wrong"
//                    success="right"
          
//                  /> */}
                 
//                  {/* <MDBInput
//                      ref = 'pass'
//                    label="Type your password"  
//                    icon="lock"
//                    group
//                    type="password"
//                    validate
               
//                  /> */}
//                </div>
//                <div className="text-center">
//                  <MDBBtn  onClick = {()=> {

//          let email = this.refs.email.value;
//          let pass = this.refs.pass.value;
//          console.log(this.refs.email.value)
//          console.log(this.refs.email.context)
//          const obj = {email :email,pass:pass}
//          loginClicked(obj);


//      }}>
//        Login</MDBBtn>
//                </div>
//              </form>
//            </MDBCol>
//          </MDBRow>
//        </MDBContainer>
//        </div>
//       </div>
//     )
//   }
// }
// export default  Login;
  

 class Login extends Component {
    email = React.createRef();
    pass = React.createRef();
   render() {
       const {
        loginClicked,
        openModal,
        open,
        closeModal
       }= this.props;
     return (
       <div className="login">
       <div className="divLogin">

       <Form   >
         <h5 className="title">Sign in</h5>
  <Form.Group controlId="formBasicEmail">
    <Form.Control ref = 'email' type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Control  ref = 'pass' type="password" placeholder="Password" />
  </Form.Group>

<div className="btns">

<a className="button" variant="primary"  onClick = {()=> {
      let email = this.refs.email.value;
      let pass = this.refs.pass.value;
      const obj = {email :email,pass:pass}
      loginClicked(obj);
  }}>
    Submit
  </a>

  <a className="button" variant="primary"  onClick = {()=> {
  
       openModal()
  }}>
    Register
  </a>
</div>

</Form>
       </div>
<Modal    openModal={openModal} open={open}  closeModal={closeModal}  />
       </div>
     )
   }
 }
 export default Login;