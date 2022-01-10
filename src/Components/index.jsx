import { StrictMode } from "react";
import ReactDOM from "react-dom";



import "../styles/index.css";
// @ts-ignore
import App from "./App";


ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.querySelector("#root")
);