import navbar from './Navbar.module.css'
import { useState, useEffect } from 'react';



const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
        // Alturas desde el top de la página
        const aboutMeOffset = document.getElementById('aboutMe')?.offsetTop;
        const skillsOffset = document.getElementById('skills')?.offsetTop;
        const laboralOffset = document.getElementById('laboral')?.offsetTop;
        const educacionOffset = document.getElementById('educacion')?.offsetTop;
        const projectsOffset = document.getElementById('projects')?.offsetTop;

        // Determina la posición del scroll
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        // Actualiza la sección activa según la posición del scroll
        if (scrollPosition >= aboutMeOffset && scrollPosition < skillsOffset) {
            setActiveSection('aboutMe');
        } else if (scrollPosition >= skillsOffset && scrollPosition < laboralOffset) {
            setActiveSection('skills');
        } else if (scrollPosition >= laboralOffset && scrollPosition < educacionOffset) {
            setActiveSection('laboral');
        } else if (scrollPosition >= educacionOffset && scrollPosition < projectsOffset) {
            setActiveSection('educacion');
        } else if (scrollPosition >= projectsOffset) {
            setActiveSection('projects');
        }
    };

    const handleNavLinkClick = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del enlace
        const targetId = e.currentTarget.getAttribute("href").slice(1); // Obtiene el ID del elemento de destino (eliminando el '#')
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" }); // Realiza el scroll suave hasta el elemento
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Limpieza del evento
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return ( 
        <nav className={navbar.nav}>

            <div className={navbar.div_a}>
                <a className={`${navbar.a} ${activeSection === 'aboutMe' ? navbar.active : ''}`} 
                    href="#aboutMe" 
                    onClick={handleNavLinkClick}> 

                    <i className="fa-regular fa-address-card fa-xl"></i>
                    <span className={navbar.popover}>Sobre mí</span>
                </a>
            </div>

            <div className={navbar.div_a}>
                <a className={`${navbar.a} ${activeSection === 'skills' ? navbar.active : ''}`} 
                href="#skills"
                onClick={handleNavLinkClick}
                > 
                    
                    <i className="fa-solid fa-thumbtack fa-xl"></i>
                    <span className={navbar.popover}>Información y aptitudes</span>
                </a>
            </div>

            <div className={navbar.div_a}>
                <a onClick={handleNavLinkClick} className={`${navbar.a} ${activeSection === 'laboral' ? navbar.active : ''}`} href="#laboral"> 
                    <i className="fa-solid fa-briefcase fa-xl"></i>
                    <span className={navbar.popover}>Experiencia laboral</span>
                </a>
            </div>
            
            <div className={navbar.div_a}>
                <a onClick={handleNavLinkClick} className={`${navbar.a} ${activeSection === 'educacion' ? navbar.active : ''}`} href="#educacion"> 
                    <i className="fa-solid fa-graduation-cap fa-xl"></i>
                    <span className={navbar.popover}>Educación/Formación</span>
                </a>
            </div>

            <div className={navbar.div_a}>
                <a onClick={handleNavLinkClick} className={`${navbar.a} ${activeSection === 'projects' ? navbar.active : ''}`} href="#projects"> 
                    <i className="fa-solid fa-code-branch fa-xl"></i>
                    <span className={navbar.popover}>Proyectos</span>
                </a>
            </div>
        </nav>
     );
}
 
export default Navbar;