import React from 'react'
import './Hello.css'
import { Button,Modal,Form } from 'react-bootstrap';
 function Hello({msg}) {
   let status='';

    status= msg.includes('your are In') ? 'userLogged':'msgText'

  return (
    <div >
      {/* <h2>{msg} </h2> */}
      <Modal className="heartbeat" show={true}   >
          <Modal.Header className="msgHeader">      
          </Modal.Header>
          <Modal.Title  className={status}> {msg}</Modal.Title>
          <Modal.Body>
          </Modal.Body>        
        </Modal>
    </div>
  )
}
export default Hello