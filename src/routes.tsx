import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

interface RoutesProps {
	toast: Function;
}

const Routes: React.FC<RoutesProps> = ({ toast }) => {
	return (
		<BrowserRouter>
			<Route path="/" exact render={(props) => <Home {...props} toast={toast} />} />
			<Route path="/editar/:id" render={(props) => <Register {...props} toast={toast} />} />
			<Route path="/adicionar" render={(props) => <Register {...props} toast={toast} />} />
		</BrowserRouter>
	);
};

export default Routes;
