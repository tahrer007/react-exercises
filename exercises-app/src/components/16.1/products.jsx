import React from "react";
import Data from "./components/data";
import Header from "./components/header";
import "./components/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./components/productList";
import ProductCard from "./components/productCard";
class Products extends React.Component {
  render() {
    return (
      <div>
       
        <BrowserRouter>
        <Routes>
         <Route path="/" exact component={<Header />} />

        </Routes>
         
          {/*<Route path="/productList" exact component={<ProductsList />} />
          <Route path="/productCard" exact component={<ProductCard />} />*/}
        </BrowserRouter>
      </div>
    );
  }
}

export default Products;
