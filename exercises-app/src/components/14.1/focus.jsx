import React from "react";
import { ReactDOM } from "react";

class focus extends React.Component {
  
   inputRef = React.createRef();


  


  componentDidMount() {
      console.log(this.inputRef.current)

  
    this.inputRef.current.focus(); 
  }
  
  render() {
    return (
      <div>
        <label htmlFor="name"></label>
        <input
        
          ref={this.inputRef}
          placeholder="auto focus"
          id="name"
        ></input>
      </div>
    );
  }
}
export default focus;
