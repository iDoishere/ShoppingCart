import React from 'react'
import './Icons.css'

import logo from '../../logo.svg'
import logoNode from '../../logoNode.svg'
import logoJs from '../../logoJs.svg'
import logoExpress from '../../logoExpress.svg'



function icons() {
  return (
    <div className="icons">

    <div >
    <img width="15%" src={logoNode} ></img>
    <img  width="15%" src={logo} ></img>
    </div>

    <div>
    <img width="15%" className="express"   src={logoExpress} ></img> 
    <img  width="10%" className="js" src={logoJs} ></img>    
   </div>
    

  
    </div>
  )
}
export default  icons;