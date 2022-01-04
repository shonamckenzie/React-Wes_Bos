import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from './NotFound'

// implicit return uses parenthesis
const Router = () => (
		<BrowserRouter>
			<Switch>
			{/* switch tag will try first route, then proceed down the list until it finds a match */}
				<Route exact path="/" component={StorePicker}/>
				<Route path="/store/:storeId" component={App}/>
				<Route component={NotFound}/>
			</Switch>
		</BrowserRouter>
)

export default Router