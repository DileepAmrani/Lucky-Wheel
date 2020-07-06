import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import Container from "@material-ui/core/Container";
import { AiTwotoneHome  } from "react-icons/ai";
import "./Toolbar.css";


const toolbar = (props) => (
  <header className="toolbar">
    <div className="spacer toolbar_toggle-button" />

    <nav className="toolbar__navigation">
      <div />

      <div
        className="toolbar__logo mobile"
        onClick={() => props.path().push("/")}
      >
        <h1>Wheeler</h1>
      </div>

      <div className="spacer toolbar_toggle-button" />
      <div className="toolbar_navigation-items">
        <Container>
          <ul>
            <li >
              <span>
                LUCKY WHEEL
              </span>
            </li>
            {/* <li >
              <span>
                CUSTOMIZE
              </span>
            </li> */}
{/* 
            <li >
              <span>New</span>
            </li>
            <li >
              <span>Open</span>
            </li>
            <li >
              <span>Save </span>
            </li>
            <li>
              <span>Share</span>
            </li> */}
          </ul>
        </Container>
      </div>

      <div className="toolbar_toggle-button">
        <DrawerToggleButton
          click={props.drawerToggleClickHandler}
          color={props.toggleButtonColor}
        />
      </div>
    </nav>
  </header>
);

export default toolbar;
