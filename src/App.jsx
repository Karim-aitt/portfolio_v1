import "./App.css";

// Components
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/footer/Footer";
import Avatar from "./components/avatar/Avatar";
import AboutContent from "./components/about/About";
import Header from "./components/header/header";
// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Header/>
			<div className="container">
				<div className="sidebar">
					<Avatar />
				</div>
				<div className="main-content">
					<AboutContent titulo = "SOBRE MI..." texto="Programadora de videojuegos con amplia experiencia profesional..." />
					<AboutContent titulo = "EXPERIENCIA LABORAL" texto="hola" />
					<AboutContent titulo = "EDUCACIÓN"/>
				</div>
				<Navbar />
			</div>
			<Footer />
		</div>
	);
}

export default App;
