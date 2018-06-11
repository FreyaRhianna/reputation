import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import UnauthDash from "./UnauthDash";
import "../component-style/index.css";

ReactDOM.render(
  <div>
    <UnauthDash />  
  </div>,
  document.getElementById("indexView")
 );
