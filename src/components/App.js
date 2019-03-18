import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Users from "./Users";

function App() {
	return (
		<Router>
			<nav className="navigation">
				<Link className="navigation-button" to="/">
					Home
				</Link>
				<Link className="navigation-button" to="/about/">
					About
				</Link>
				<Link className="navigation-button" to="/users/">
					Users
				</Link>
			</nav>

			<main className="app">
				<Route path="/" exact component={Home} />
				<Route path="/about/" component={About} />
				<Route path="/users/" component={Users} />
			</main>
		</Router>
	);
}

export default App;
