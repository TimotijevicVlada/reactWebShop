import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Contact from './components/Contact';
import Details from "./components/Details";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/details/:id" exact component={Details} />
      </Provider>
    </Router>
  );
};

export default App;
