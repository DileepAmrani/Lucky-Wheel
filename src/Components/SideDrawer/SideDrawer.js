import React from "react";

import "./SideDrawer.css";

// const SideDrawer = (props) => {
class SideDrawer extends React.Component{


   closeDrawer=()=>{
     this.props.close()
  }


render(){
  return (
    <nav className="side-drawer">
      <ul>
        <li>
          <span>LUCKY WHEEL</span>
        </li>

        {/* <li>
          <span>New</span>
        </li>
        <li>
          <span>Open</span>
        </li>
        <li>
          <span>Save </span>
        </li>
        <li>
          <span>Share</span>
        </li> */}
      </ul>
    </nav>
  );
}};

export default SideDrawer;
