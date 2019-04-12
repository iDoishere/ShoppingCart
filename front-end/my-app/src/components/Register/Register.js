import React, { Component } from 'react'
import { Form ,Button} from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';



class Register extends Component {
    name = React.createRef();
    email = React.createRef();
    pass = React.createRef();
    rePass = React.createRef();
  render() {
    const {
        clickedRegister
    } = this.props;
    return (
      <div>
      <MDBContainer>
      <MDBRow>
        <MDBCol  >
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Register</p>
                <div className="grey-text">
                  <MDBInput
                   ref={this.name}
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    ref={this.email}
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                         ref={this.pass}
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    ref={this.rePass}
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                <MDBBtn onClick={()=> {
                  console.log( this.name)
                let name = this.name.current.state.innerValue;
                let email =this.email.current.state.innerValue;
                let pass = this.pass.current.state.innerValue;
                let rePass =this.rePass.current.state.innerValue;
                const obj = {name :name,email:email,pass:pass,rePass:rePass}
                clickedRegister(obj);
        }}
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign in
                </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        {/* <Button variant="primary" onClick={()=> {
                let name = this.refs.name.value;
                let email = this.refs.email.value;
                let pass = this.refs.pass.value;
                let rePass = this.refs.rePass.value;
                const obj = {name :name,email:email,pass:pass,rePass:rePass}
                clickedRegister(obj);
        }} >
           Register
            </Button> */}
  
      </div>
    )
  }
}

export default Register;