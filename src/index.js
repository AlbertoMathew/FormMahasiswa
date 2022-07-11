import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MahasiswaProvider } from './context/MahasiswaProvider'

ReactDOM.render(
  <React.StrictMode>
    <MahasiswaProvider>
      <App />
    </MahasiswaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
