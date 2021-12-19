import React from "react";
import { useState } from "react";
import axios from "axios";
import Btn from "./button";
import "./style.css";
//import "style.css"

const getCat = async () => {
  let arr = [];
  const response = await axios.get(
    "https://api.chucknorris.io/jokes/categories"
  );

  arr.push(response.data);
  return arr;
};

class Catagories extends React.Component {
  state = {
    CatagoriesArr: [],
    joke: "",
  };

  componentDidMount = () => {
    getCat().then((data) => {
      this.setState({
        CatagoriesArr: data[0],
      });
    });
  };
  componentDidUpdate = () => {
  
  };
  getCatJok = async (cat) => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${cat}`
    );
    console.log(response.data.value);
    //let joke = response.data.value ;
    this.setState({
      joke: response.data.value,
    });
  };

  render() {
    return (
      <div>
        <div className="btnBOX">
          {this.state.CatagoriesArr.map((btn, i) => {
            return <Btn callBack={this.getCatJok} text={btn} key={i} />;
          })}
        </div>
        <div>{this.state.joke}</div>
      </div>
    );
  }
}
export default Catagories;
