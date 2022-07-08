import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ScrollToTop from './extensions/scrollToTop'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
        <ScrollToTop/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
