import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./mainpage";
import Movie from "./Movie";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/:id" component={() => <Movie />} />
          <Route path="/" component={() => <Home />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
