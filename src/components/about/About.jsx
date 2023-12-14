import about from "./About.module.css";

const AboutContent = (props) => {

	const texto2 = props.texto2;
	const texto3 = props.texto3;

	return (
		<>
			<div className={about.div} id={props.id_about}>
				<h2 className={about.title}>{props.title}</h2>

				<p className={about.p}>
					{props.texto}
				</p>
				
				{texto2 ? 
				<p className={about.p}>
					{texto2}
				</p> : 
				null
				}
				{texto3 ? 
				<p className={about.p}>
					{texto3}
				</p> : 
				null
				}

			</div>
		</>
	);
};

export default AboutContent;
