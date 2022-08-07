import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ScrollToTop from './extensions/scrollToTop'
import Loadings from "./components/Site/Loading/Loading";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loadings />}>
      <BrowserRouter>
        <App />
        <ScrollToTop />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
