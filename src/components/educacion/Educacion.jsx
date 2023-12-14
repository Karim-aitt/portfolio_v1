import educ from "./Educacion.module.css";

const EducacionContent = (props) => {
	return (
		<>
			<div className={educ.div} id={props.id_educacion}>
				<h2 className={educ.title}>{props.title}</h2>
				
				<div className={educ.container}>
					<div className={educ.box_date}>
						<span>2022  Presente</span>
					</div>
					<div className={educ.box_educ}>
					<img className={educ.logo} src="src/assets/ilerna_logo.jpg" />
							<div>
								<h4>Grado superior en Desarrollo de Aplicaciones Web</h4>
								<i>Ilerna</i>
							</div>
					</div>
					
				</div>
				<hr></hr>

				<div className={educ.container}>

					<div className={educ.box_date}>
						<span>Marzo 2022  Agosto 2022</span>
					</div>
					<div className={educ.box_educ}>
							<img className={educ.logo} src="src/assets/4geeks_logo.png" />
							
							<div>
								<h4>
								Bootcamp, Full Stack Web Developer
								</h4>
								<i>4GeeksAcademy</i>
							</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EducacionContent;
