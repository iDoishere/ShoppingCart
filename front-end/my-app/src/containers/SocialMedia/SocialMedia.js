import React, { Component } from 'react'
import Login from '../../components/Login/Login'
import './SocialMedia.css'
import { connect } from 'react-redux'
import  * as actionsType    from '../../store/actions'
 import Icons from '../../components/Icons/Icons'

 class SocialMedia extends Component {

  render() {

const {
  clickedLogin,
  clickedOpenModal,
  open,
  clickedCloseModal
}=this.props;


    return (
      <div  >
      <Icons/>
      <Login 
       loginClicked={clickedLogin}
        openModal={clickedOpenModal}     
        open={open}  
        closeModal={clickedCloseModal}
      /> 
      </div>
    )
  }
}
const mapStateToProps = state => { 
  
    return {
       
      open:state.modal.show
   
    }
};
const mapDispatchToProps = dispatch => {
  return {
        clickedLogin:(obj) => dispatch(actionsType.loginAuth(obj)),
        clickedOpenModal:() =>dispatch(actionsType.modal()),
        clickedCloseModal:() =>dispatch(actionsType.modal())
  }
};
 
export default connect(mapStateToProps,mapDispatchToProps)(SocialMedia);