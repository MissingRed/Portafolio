import React from "react";
import Home from "./pages/Home";
import Portfolio from "./components/Portfolio";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
