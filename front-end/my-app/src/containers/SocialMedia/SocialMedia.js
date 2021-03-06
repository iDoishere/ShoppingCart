import React, { Component } from 'react'
import Login from '../../components/Login/Login'
import './SocialMedia.css'
import { connect } from 'react-redux'
import  * as actionsType    from '../../store/actions'
 import Icons from '../../components/Icons/Icons'
 import Modal from '../../components/Modal/Modal'
 import { BrowserRouter as Router, Route, Link,Redirect,Switch } from "react-router-dom";
 import Hello from '../../components/Hello/Hello'
 import MainApp from '../MainApp/MainApp'
 class SocialMedia extends Component {

  render() {

const {
  clickedLogin,
  clickedOpenModal,
  open,
  clickedCloseModal,
  clickedRegister ,
  inOrOut,
  msg
}=this.props;


 
    return (
      <Router>
        <Switch>       
            <Route path="/MainApp/" render={(props) => <MainApp {...props} />} />
            <Route render={() => {
              return (
                inOrOut ? (<Redirect to="/MainApp/" />) : (
                  <div>
              <Icons/>
              {this.props.ifBanner ?         
              <Hello msg={msg}/> : ''         
              }         
              <Modal   open={open}    register={clickedRegister} closeModal={clickedCloseModal}/>
              <Login loginClicked={clickedLogin} openModal={clickedOpenModal}/>        
               </div>   
   
             ))}} />

      </Switch>
      </Router>
    )
  }
}
const mapStateToProps = state => { 
       console.log(state)
    return {
       
      open:state.modal.show,
      inOrOut:state.login.isLoggedIn,
      ifBanner:state.login.ifBanner,
      msg:state.login.msg
    }
};
const mapDispatchToProps = dispatch => {
  return {
        clickedLogin:(obj) => dispatch(actionsType.loginAuth(obj)),
        clickedOpenModal:() =>dispatch(actionsType.modal()),
        clickedCloseModal:() =>dispatch(actionsType.modal()),
        clickedRegister:(obj) =>dispatch(actionsType.register(obj))
  }
};
 
export default connect(mapStateToProps,mapDispatchToProps)(SocialMedia);