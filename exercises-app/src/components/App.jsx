import React from "react";
import ChuckNorris from "./12.1/chuck_norris";
import DataMassaging from "./13.1/data_massaging";
import Focus from "./14.1/focus";
import Copy from "./14.2/copy";
import Products from "./16.1/products";
import Text from "./18.1/Text";
import SimpleFetch from "./19.1/SimpleFetch";
import Countries from "./19.2/Countries";
import Alogolia from "./19.3/Alogolia";
import CancelRequest from "./20.1/cancelRequest";
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <ChuckNorris /> */}
        {/*<DataMassaging />
        <Focus />
         <Copy />
         <Products />
           <Text />
            <SimpleFetch/>
            <Countries />
              <Alogolia/>
        */}
      <CancelRequest />
        
      </div>
    );
  }
}
export default App;
