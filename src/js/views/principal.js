import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Minutas } from "../component/minutas.js";
import "../../styles/home.scss";
import { Context } from "./../store/appContext";

export const Principal = props => {
	const { store, actions } = useContext(Context);
	// const [state, setState] = useState({
	// });

	useEffect(() => {
		//actions.getMinutas("#" + props.match.params.id);
	}, []);

	return (
		<div className="container">
			<div className="container">
				<div className="row" style={{ marginTop: "30px" }}>
					<div className="col-4">
						<Link to="/newmeeting">
							<button type="button" className="btn btn-outline-primary">
								<i className="fa fa-plus" /> Crear nueva reunión
							</button>
						</Link>
					</div>
					<div className="col-4" />
					<div className="col-4" />
				</div>
				<div className="row" style={{ marginTop: "20px" }}>
					<div className="col-4 align-self-end" style={{ fontSize: "200%" }}>
						<i className="fa fa-folder" />{" "}
						<span>
							<strong>Minutas</strong>
						</span>
					</div>
					<div className="col-4" />
					<div className="col-4">
						<button type="button" className="btn btn-outline-dark float-right">
							Abrir última minuta
						</button>
					</div>
				</div>
			</div>

			<div className="container" style={{ marginTop: "20px" }}>
				<div className="row">
					<div className="col-3 text-center text-sm-left">
						<h2>Fecha</h2>
					</div>
					<div className="col-3 text-center text-sm-left">
						<h2>Título</h2>
					</div>
					<div className="col-3 text-center text-sm-left">
						<h2>Descripción</h2>
					</div>
					<div className="col-3 text-center text-sm-left">
						<h2>Acciones</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-12" aria-expanded="true">
						<ul className="list-group pull-down" id="minuta-list">
							{store.meetings.user_id == 1 && store.meetings.id == 1 // COMO CONDICIONAR EL MAP AL USUARIO ACTIVO => props.user_id?
								? store.meetings.map((item, i) => {
										return <Minutas user_memo={item} key={i} index={i} />;
								  })
								: ""}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
