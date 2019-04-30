import React from 'react'
import './Hello.css'
import { Button,Modal,Form } from 'react-bootstrap';
 function Hello({msg}) {
  return (
    <div >
      {/* <h2>{msg} </h2> */}
      <Modal className="heartbeat" show={true}   >
          <Modal.Header>
            <Modal.Title>{msg}</Modal.Title>
          </Modal.Header>
        </Modal>
    </div>
  )
}
export default Hello