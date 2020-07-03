import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from "./pages/homepage/Homepage";
import shop from "./pages/shop/shop";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={shop} />
      </Switch>
    </Router>
  );
}

export default App;
