import about from "./About.module.css";

const AboutContent = (props) => {
	return (
		<>
			<div className={about.div}>
				<h1 className ={about.h1}>{props.titulo}</h1>
				<p className={about.p}>
					{props.texto}
				</p>
			</div>
		</>
	);
};

export default AboutContent;
