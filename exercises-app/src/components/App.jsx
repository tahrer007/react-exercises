import React from "react";
import ChuckNorris from "./12.1/chuck_norris";
import DataMassaging from "./13.1/data_massaging";
import Focus from "./14.1/focus";
import Copy from "./14.2/copy";
import Products from "./16.1/products"

class App extends React.Component {

  
  render() {
    return (
      <div>
       
        {/* <ChuckNorris /> */}
        {/*<DataMassaging />
        <Focus />
         <Copy />
        */}
       <Products />
      </div>
    );
  }
}
export default App;
