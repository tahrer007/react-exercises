import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

class header extends React.Component {
  render() {
    return (
     
        <nav className="header">
      
         <Link to="/" > home </Link>
         /{/*<Link to="/productList"> products </Link>*/}
  
        </nav>
     
    );
  }
}

export default header;
