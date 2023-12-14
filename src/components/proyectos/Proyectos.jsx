import pr from "./Proyectos.module.css";

const ProyectoContent = (props) => {

    const handleOpenModal = (modalContent) => {
        props.onOpenModal(modalContent);
    };
    
	return (
		<>
			<div className={pr.div} id={props.id_pr}>
				<h2 className={pr.title}>{props.title}</h2>
                <div className={pr.container}>

                    <div className={pr.img_box}>
                        <img src="src/assets/crm.png" alt="CRM" />

                        <h4 className={pr.overlay_text}>CRM</h4>

                        <button className={pr.overlay_button} onClick={() => props.onOpenModal({
                            title: "CRM", 
                            tech: ["React", "Tailwind", "JSON server"], 
                            img: "src/assets/crm.png", 
                            link: "https://reliable-valkyrie-b34511.netlify.app/",
                            desc: "Este proyecto es un CRM simple para cualquier persona donde el usuario (administrador) puede administrar sus clientes."
                            })}>
                        Ver Detalles
                    </button>
                    </div>

                    <div className={pr.img_box}>
                        <img src="src/assets/gastos.png" alt="Gastos" />
                        <h4 className={pr.overlay_text}>Gastos</h4>
                        <button className={pr.overlay_button} onClick={() => props.onOpenModal({
                            title: "Gastos", 
                            tech: ["React", "Tailwind"], 
                            img: "src/assets/gastos.png", 
                            link: "https://beautiful-paprenjak-3aaa26.netlify.app/",
                            desc: "Aplicación sencilla para controlar los gastos de tu vida."
                            
                            })}>
                            Ver Detalles
                        </button>
                    </div>

                    <div className={pr.img_box}>
                        <img src="src/assets/portf_old.png" alt="Gastos" />
                        <h4 className={pr.overlay_text}>Gastos</h4>
                        <button className={pr.overlay_button} onClick={() => props.onOpenModal({
                            title: "Portfolio antiguo", 
                            tech: ["React", "Tailwind", "Vite"], 
                            img: "src/assets/portf_old.png", 
                            link: "https://karim-pf.netlify.app/",
                            desc: "Antiguo portfolio realizado con React + Vite + Tailwind"
                            
                            })}>
                            Ver Detalles
                        </button>
                    </div>

                </div>
			</div>
		</>
	);
};

export default ProyectoContent;
