import about from "./About.module.css";

const AboutContent = (props) => {

	const texto2 = props.texto2;

	return (
		<>
			<div className={about.div}>
				<h2 className={about.title}>SOBRE MI...</h2>

				<p className={about.p}>
					{props.texto}
				</p>
				
				{texto2 ? 
				<p className={about.p}>
					{texto2}
				</p> : 
				null
				}

			</div>
		</>
	);
};

export default AboutContent;
