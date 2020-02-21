import React, { useContext, useEffect } from "react";
import "../../styles/landing.css";
import { Context } from "./../store/appContext";
import Login from "../component/login.js";
import favicon from "../../img/Logo_banner.png";

export const Home = props => {
	return (
		<>
			<div className="bg-light shadow-lg py-5">
				<div className="container">
					<div className="row">
						<div className="p-5 col-md-7 d-flex flex-column justify-content-center">
							<h1 className="display-4 mb-3">
								<img src={favicon} height="80" />
							</h1>
							<p className="mb-4 lead">
								{" "}
								Reuniones más efectivas. Trabajo colaborativo.
								<br />
								Resultados formidables.{" "}
							</p>
						</div>
						<div className="p-5 col-md-5 shadow-lg">
							<Login history={props.history} />
						</div>
					</div>
				</div>
			</div>
			<div className="text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<h1>Frases Inspiradoras</h1>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-md-4 p-4">
							<i className="d-block fas fa-car fa-3x mb-2 text-muted" />
							<h4>
								<b>Henry Ford (Greenfield, 1863)</b>
							</h4>
							<p>
								{" "}
								“Juntarse es un comienzo. Seguir juntos es un progreso. Trabajar juntos es un éxito”.{" "}
							</p>
						</div>
						<div className="col-md-4 col-6 p-4">
							<i className="d-block fas fa-basketball-ball fa-3x mb-2 text-muted" />
							<h4>
								<b>Michael Jordan (Brooklyn, 1963)</b>
							</h4>
							<p>
								{" "}
								El talento gana partidos, pero el trabajo en equipo y la inteligencia gana campeonatos”.{" "}
							</p>
						</div>
						<div className="col-md-4 col-6 p-4">
							<i className="d-block fas fa-user-edit fa-3x mb-2 text-muted" />
							<h4>
								<b>Ifeanyi Onuoha (Imo, Nigeria)</b>
							</h4>
							<p>
								{" "}
								El trabajo en equipo es el secreto que hace que gente común consiga resultados poco
								comunes”.{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
