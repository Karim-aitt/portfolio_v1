import laboral from "./Laboral.module.css";

const LaboralContent = (props) => {
	return (
		<>
			<div className={laboral.div} id={props.id_laboral}>
				<h2 className={laboral.title}>{props.title}</h2>

				<div className={laboral.container_linea}>
					<div className={laboral.linea_tiempo}>
						<div className={laboral.momento}>
							<h4>2022 - 2023</h4>
							<div className={laboral.descripcion}>
								<div className={laboral.img_div}>
									<img
										className={laboral.img}
										src="src/assets/bosonit_logo.jpg"
										alt="bosonit"
									/>
									<a
										href="https://www.bosonit.com"
										rel="noreferrer"
										target="_blank"
									>
										Bosonit
									</a>
									<p>Associate Consultant</p>
								</div>
								<hr />
								<ul>
									<li>Diseño y desarrollo de proyectos web</li>
									<li>Maquetación y desarrollo web front-end</li>
									<li>
										Diseño y desarrollo de interfaces de usuario atractivas y
										funcionales
									</li>
								</ul>
							</div>
						</div>
						<div className={laboral.momento}>
							<h4>2021 - 2022</h4>
							<div className={laboral.descripcion}>
								<div className={laboral.img_div}>
									<img
										className={laboral.img_kpk}
										src="src/assets/kpklogo.png"
										alt="kpk"
									/>
									<a
										href="https://www.kpkteam.es"
										rel="noreferrer"
										target="_blank"
									>
										KPK
									</a>
									<p>Project Manager Assistant</p>
								</div>
								<hr />
								<ul>
									<li>
										Preparar a nuevos miembros y coordinar un pequeño equipo 
										dedicados al testing, Staff y desarrolladores
										para mejorar la experiencia de usuario y sistemas de un
										videojuego.
									</li>
									<li>Gestión de documentación y archivos.</li>
									<li>Resolución de problemas y atención a incidencias.</li>
								</ul>
							</div>
						</div>
						<div className={laboral.momento}>
							<h4>2017</h4>
							<div className={laboral.descripcion}>
								<div className={laboral.img_div}>
									<img
										className={laboral.img}
										src="src/assets/defe.png"
										alt="def"
									/>
									<a
										href="https://www.defensa.gob.es/"
										rel="noreferrer"
										target="_blank"
									>
										Ministerio de Defensa
									</a>
									<p></p>
								</div>
								<hr />
								<ul>
									<li>Trabajo en equipo.</li>
									<li>Gestión de tiempo y directrices.</li>
									<li>Organización de abastecimiento.</li>
								</ul>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</>
	);
};

export default LaboralContent;
