import skills from "./Skills.module.css";
import CsharpIcon from "../../assets/icons/c-sharp.svg";
import CssIcon from "../../assets/icons/css.svg";
import gitIcon from "../../assets/icons/git.svg";
import HtmlIcon from "../../assets/icons/html.svg";
import JavaScriptIcon from "../../assets/icons/javascript.svg";
import JavaIcon from "../../assets/icons/java.svg";
import mongodbIcon from "../../assets/icons/mongodb.svg";
import mysqlIcon from "../../assets/icons/mysql.svg";
import phpIcon from "../../assets/icons/php.svg";
import postgresqlIcon from "../../assets/icons/postgresql.svg";
import reactIcon from "../../assets/icons/react.svg";
import TypeScriptIcon from "../../assets/icons/typescript.svg";
import vueIcon from "../../assets/icons/vue.svg";
import firebaseIcon from "../../assets/icons/firebase.svg";

const SkillsContent = (props) => {
	return (
		<>
			<div className={skills.div} id={props.id_skills}>
				<div className={skills.container}>
					<div className={skills.table_div}>
							<h2>Información personal</h2>
							<table className={skills.table}>
								<tbody>
									<tr>
										<th>Nombre</th>
										<td>Karim González</td>
									</tr>
									<tr>
										<th>País</th>
										<td>España</td>
									</tr>
									<tr>
										<th>E-MAIL</th>
										<td>
											<a href="emailto:karim.gonzalez.ait@gmail.com">
												karim.gonzalez.ait@gmail.com
											</a>
										</td>
									</tr>
								</tbody>
							</table>
						
					</div>

					<div className={skills.table_div}>
						<h2>Idiomas</h2>
						<table className={skills.table}>
							<tbody>
								<tr>
									<th>Español</th>
									<td>Nativo</td>
								</tr>
								<tr>
									<th>Inglés</th>
									<td>Fluido (B2)</td>
								</tr>
								<tr>
									<th>Alemán</th>
									<td>A1</td>
								</tr>
							</tbody>
						</table>
					</div>
                    
				</div>

				<hr className={skills.hr} />

				<div className={skills.aptitud_div}>
					<div>
						<h2>Aptitudes</h2>

						<table className={skills.table_skills}>
							<tbody>
								<tr>
									<th>Lenguajes:</th>
									<td>
										<img
											className={skills.img}
											src={JavaScriptIcon}
											alt="javascript"
										/>
										<span>Javascript</span>
									</td>
									<td>
										<img
											className={skills.img}
											src={TypeScriptIcon}
											alt="typescript"
										/>
										<span>Typescript</span>
									</td>
									<td>
										<img className={skills.img} src={CsharpIcon} alt="csharp" />
										<span>C#</span>
									</td>
									<td>
										<img className={skills.img} src={JavaIcon} alt="java" />
										<span>Java</span>
									</td>
									<td>
										<img className={skills.img} src={phpIcon} alt="php" />
										<span>Php</span>
									</td>
								</tr>

								<tr>
									<th>Backend:</th>
									<td>
										<img className={skills.img} src={mysqlIcon} alt="mysql" />
										<span>Mysql</span>
									</td>
									<td>
										<img
											className={skills.img}
											src={postgresqlIcon}
											alt="postgre"
										/>
										<span>postgresql</span>
									</td>
									<td>
										<img className={skills.img} src={mongodbIcon} alt="mongo" />
										<span>mongodb</span>
									</td>
									<td>
										<img
											className={skills.img}
											src={firebaseIcon}
											alt="mongo"
										/>
										<span>firebase</span>
									</td>
								</tr>

								<tr>
									<th>Frontend:</th>
									<td>
										<img className={skills.img} src={reactIcon} alt="react" />
										<span>React</span>
									</td>
									<td>
										<img className={skills.img} src={vueIcon} alt="vue" />
										<span>Vue</span>
									</td>
									<td>
										<img className={skills.img} src={HtmlIcon} alt="html" />
										<span>Html</span>
									</td>
									<td>
										<img className={skills.img} src={CssIcon} alt="css" />
										<span>CSS</span>
									</td>
								</tr>

								<tr>
									<th>Otros:</th>
									<td>
										<img className={skills.img} src={gitIcon} alt="git" />
										<span>Git</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default SkillsContent;
