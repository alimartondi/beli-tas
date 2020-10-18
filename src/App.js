import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import ProductScreen from "./components/product";
import ProductDetailScreen from "./components/productDetail";
import About from "./components/about";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}

      <Switch>
        <Route exact path="/" component={ProductScreen} />
        <Route exact path="/product:id:name" component={ProductDetailScreen} />
        <Route exact path="/about" component={About} />
        <Route path="/:">ger</Route>
        <Route>404 Not Found</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
