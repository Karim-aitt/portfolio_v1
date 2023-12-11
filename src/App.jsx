import "./App.css";

// Components
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/footer/Footer";
import Avatar from "./components/avatar/Avatar";
import AboutContent from "./components/about/About";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<hr />
			<div className="container">
				<div className="sidebar">
					<Avatar />
				</div>
				<div className="main-content">
					<AboutContent texto="Programadora de videojuegos con amplia experiencia profesional..." />
					<AboutContent texto="hola" />
				</div>
				<Navbar />
			</div>
			<Footer />
		</div>
	);
}

export default App;
