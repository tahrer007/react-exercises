import React from "react";
import { useState } from "react";

import data from "./data";

const getNames = () => {
  let namesArr = [];
  data.forEach((element) => {
    namesArr.push(element.name);
  });

  return namesArr;
};
const getOld = () => {
  let Arr = [];
  data.forEach((element) => {
    let date = new Date(element.birthday).getFullYear();
    if (date < 1990) Arr.push(date);
  });

 return Arr  ; 
};

class DataMassaging extends React.Component {
  state = {
    names: getNames(),
    old: getOld(),
  };
  componentDidMount = () => {
    console.log(this.state);
  };
  componentDidUpdate = () => {
    console.log(this.state);
  };

  render() {
    return <div>hi tahrer !!</div>;
  }
}
export default DataMassaging;
