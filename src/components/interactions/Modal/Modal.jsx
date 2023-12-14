import modal from "./Modal.module.css";

const Modal = ({ title, onClose, tech, link, img, desc }) => {
	return (
		<div className={modal.modal}>
			<div className={modal.content}>
                
            <div className={modal.container}>
                    <img src={img} />
                </div>
                <div className={modal.box}>
                    <h2>{title}</h2>
                    <h4>Tecnologías:</h4>
                    <ul>
                        {tech.map((e, index) => 
                        <li key={index}>{e}</li>)}
                    </ul>
                    <b>
                    Web:
                    </b> <a href={link} rel="noreferrer" target="_blank">
                        Link
                    </a>
                    <p>
                            {desc}
                    </p>

                </div>
                <div className={modal.cont_button}>
                    <span onClick={onClose}>X</span>
                </div>
			</div>
		</div>
	);
};

export default Modal;
