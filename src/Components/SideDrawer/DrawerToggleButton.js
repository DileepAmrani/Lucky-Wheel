import React from 'react'
import {  AiOutlineMenu } from "react-icons/ai";


const drawerToggleButton = props => (
  <div className="toggle-butto" onClick={props.click}>
<AiOutlineMenu  size={35} color='#fff'/>
  </div>
)

export default drawerToggleButton