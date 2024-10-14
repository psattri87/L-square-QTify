import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/poppins";
import { ApiState } from "./context/ApiContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ApiState>
      <App />
    </ApiState>
 </StrictMode>
);
