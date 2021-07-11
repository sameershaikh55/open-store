import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// IMPORTING STYLINGS
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";

// IMPORTING ROUTER
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
