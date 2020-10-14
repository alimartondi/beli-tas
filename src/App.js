import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar";
import ProductScreen from "./components/product";
import MainScreen from "./components/main";
import ProductDetailScreen from "./components/productDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <MainScreen />
      <ProductScreen /> */}
      <ProductDetailScreen />
    </div>
  );
}

export default App;
