
  import React, { Component } from 'react'
 import { Button,Modal } from 'react-bootstrap';

class MyModal extends React.Component {
  
    render() {
                const {
            closeModal,
            open
        } = this.props;
      return (
        <div>     
            <Modal show={open} onClick = {()=> { closeModal()}}>
          <Modal.Header  >
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"   >
              Close
            </Button>
            <Button variant="primary"  >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
               </div>
      );
    }
  }
  export default MyModal;
// import React, { Component } from 'react'
// import { Button,Modal } from 'react-bootstrap';

//  class MyModal extends Component {

//   render() {

//         const {
//             closeModal,
//             open
//         } = this.props;
// console.log(open)
//     return (
//       <div>     
//         <Modal show={open}   onHide={closeModal } >
//           <Modal.Header  >
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick = {()=> { closeModal()}} >     
//               Close
//             </Button>
//                 <Button variant="primary"  >
//               Register
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     )
//   }
// }

//   export default MyModal;