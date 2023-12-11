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
					<AboutContent 
						texto="Programadora de videojuegos con amplia experiencia profesional. 
						Durante mi trayectoria laboral he participado en varios proyectos
						de VR como programadora principal, tanto PCVR como standalone. 
						Además, tengo experiencia desarrollando y distribuyendo juegos 2D
						para Android, iOS y WebGL, atendiendo a las características propi
						as de cada medio." 
						texto2="En mi tiempo libre me gusta desarrollar prototipos y competir en Game Jams, donde puedo experimentar con diferentes formatos interactivos para seguir ampliando mis conocimientos y habilidades. También suelo stremear varias veces por semana en Twitch, donde hago pequeños prototipos y explico proyectos propios. Además, soy cofundadora de FemDevs, una asociación sin ánimo de lucro de mujeres desarrolladoras de videojuegos, y ponente habitual en eventos tecnológicos y sociales como Mobile World Congress, Codemotion y GlobalVRDay."
					

					/>
					<AboutContent texto="hola" />
				</div>
				<Navbar />
			</div>
			<Footer />
		</div>
	);
}

export default App;
