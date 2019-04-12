import React, { Component } from 'react'
import Login from '../../components/Login/Login'
import './SocialMedia.css'
import { connect } from 'react-redux'
import  * as actionsType    from '../../store/actions'
 import Icons from '../../components/Icons/Icons'
 import Modal from '../../components/Modal/Modal'
 class SocialMedia extends Component {

  render() {

const {
  clickedLogin,
  clickedOpenModal,
  open,
  clickedCloseModal,
  clickedRegister
}=this.props;


    return (
      <div  >
      <Icons/>
      <Login 
       loginClicked={clickedLogin}
         openModal={clickedOpenModal}     
        
      /> 
      <Modal      open={open}  closeModal={clickedCloseModal} register={clickedRegister}  />
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
        clickedCloseModal:() =>dispatch(actionsType.modal()),
        clickedRegister:(obj) =>dispatch(actionsType.register(obj))
  }
};
 
export default connect(mapStateToProps,mapDispatchToProps)(SocialMedia);