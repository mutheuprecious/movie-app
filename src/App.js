import "./App.css";
import Router from "./Router/Router";
import { BrowserRouter, Router , Switch } from "react-router-dom";
import "./../node_modules/touch-loader/touchLoader";
import React, { useEffect, useState } from "react";
import Myloader from "react-spinners/ClipLoader";
import NotFound from "./Pages/Error/NotFound";

function App() {
  const [spinner, setSpinner] = useState(true);

  // eslint-disable-next-line
  let [color, setColor] = useState("grey");

  useEffect(() => {
    setTimeout(() => setSpinner(false), 500);
  }, []);
  return (
    <>
      {!spinner ? (
        <BrowserRouter>
          <Switch>
            <Router exact path="/error" component={NotFound} />
            <Router path="/" component={Router} />
          </Switch>
        </BrowserRouter>
      ) : (
        <div className="load_app" style={{ height: "400px" }}>
          <Myloader
            color={color}
            size={80}
            className="m__load"
            speedMultiplier={1.5}
          />
        </div>
      )}
    </>
  );
}

export default App;