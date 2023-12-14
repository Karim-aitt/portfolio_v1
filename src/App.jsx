import "./App.css";
import { useState, useEffect } from "react";
// Components
import Header from "./components/header/Header";
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/footer/Footer";
import Avatar from "./components/avatar/Avatar";
import AboutContent from "./components/about/About";
import SkillsContent from "./components/skills/Skills";
import LaboralContent from "./components/laboral/Laboral";
import EducacionContent from "./components/educacion/Educacion";
import ProyectoContent from "./components/proyectos/Proyectos";
import Modal from "./components/interactions/Modal/Modal";

function App() {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalTitle, setModalTitle] = useState("");
	const [tech, setTech] = useState([]);
	const [img, setImg] = useState("");
	const [link, setLink] = useState("");
	const [desc, setDesc] = useState("");

	const handleOpenModal = (content) => {
		setModalTitle(content.title);
		setTech(content.tech)
		setImg(content.img)
		setLink(content.link)
		setDesc(content.desc)
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => {
            window.removeEventListener('scroll', checkScrollTop)
        };
    }, [showScroll]);
	
    

	return (
		<div>
			<Header/>
			<div className="container">
				<div className="sidebar">
					<Avatar />
				</div>
				<div className="main-content">
					<AboutContent
						id_about="aboutMe"
						title="SOBRE MI..."
						texto="Desarrollador Full Stack Junior con un enfoque centrado en soluciones y una fuerte habilidad para
						el trabajo colaborativo.
						"
						texto2="
						Apasionado por la innovación y la integración de diversas bibliotecas y tecnologías para el
						desarrollo de proyectos y aplicaciones web de vanguardia. Me caracterizo por mi creatividad y
						atención al detalle.
						"
						texto3="
						Siempre en busca de nuevas oportunidades para crecer profesionalmente y aportar valor a mi
						equipo.
						"
					/>
					<SkillsContent id_skills="skills" />
					<LaboralContent id_laboral="laboral" title="EXPERIENCIA LABORAL" />
					<EducacionContent id_educacion="educacion" title="EDUCACIÓN" />

					<ProyectoContent
						id_pr="projects"
						title="PROYECTOS"
						onOpenModal={handleOpenModal} />
						{isModalOpen && (
							<Modal 
							title={modalTitle}
							tech={tech}
							img={img}
							link={link}
							onClose={handleCloseModal}
							desc={desc}
							>
							desc={desc}
							</Modal>
						)}

					<Footer />	
				</div>
				<Navbar />
			</div>
			
			{showScroll && 
				<button onClick={scrollTop} 
				className="scrollToTopButton">
				<i className="fa-solid fa-arrow-up fa-xl"></i>
				</button>
			}
		</div>
	);
}

export default App;
