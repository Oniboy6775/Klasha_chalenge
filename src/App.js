import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Home from "./components/pages/Home";
import "./style.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
