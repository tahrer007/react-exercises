import React from "react";
import "./style.css";
import data from "./data"

class ProductsList extends React.Component {

  /*  <nav className="list">
          {Data.map((product, i) => {
            return <ProductList id={product.id} title={product.title} />;
          })}
        </nav> */

  
  render() {
    return (

      

      
            <div key={this.props.key}>
              

               {this.props.title}
            
          
            </div>


    );
  }
}

export default ProductsList;
