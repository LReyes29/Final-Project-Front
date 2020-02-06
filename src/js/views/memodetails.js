import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const MemoDetails = props => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});

	//const resp = actions.getFetch("#" + props.match.params.id);
	//resp.then(resp => resp.json()).then(data => setState(data));

	return (
		<>
			<div className="container" style={{ padding: "0px" }}>
				<div className="row" style={{ margin: "0px" }}>
					<div className="col-6" style={{ padding: "0px" }}>
						<h1>Minuta Reunión</h1>
						<form>
							<div className="form-group row" style={{ marginTop: "20px" }}>
								<label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
									Nombre Proyecto:
								</label>
								<div className="col-sm-8">
									<input
										type="proyecto"
										className="form-control"
										id="inputProyecto"
										placeholder="Proyecto"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
									Título Reunión:
								</label>
								<div className="col-sm-8">
									<input
										type="titulo"
										className="form-control"
										id="inputTítulo"
										placeholder="Título"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
									Fecha:
								</label>
								<div className="col-sm-8">
									<input type="fecha" className="form-control" id="inputFecha3" placeholder="Fecha" />
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
									Lugar:
								</label>
								<div className="col-sm-8">
									<input type="lugar" className="form-control" id="inputLugar" placeholder="Lugar" />
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputPassword3" className="col-sm-4 col-form-label">
									Citación hecha por:
								</label>
								<div className="col-sm-8">
									<input
										type="citador"
										className="form-control"
										id="inputCitador"
										placeholder="Nombre Citador"
									/>
								</div>
							</div>
						</form>
					</div>
					<div
						className="col-6 d-flex justify-content-center d-flex align-items-center"
						style={{ padding: "0px" }}>
						<div>
							<h4>Espacio del Reloj</h4>
							<img className="d-flex justify-content-lg-center" />
							<button className="btn btn-primary" type="button" style={{ margin: "5px" }}>
								Comenzar
							</button>
							<button className="btn btn-danger" type="button">
								Pausar
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="container" style={{ padding: "0px" }}>
				<div className="row" style={{ margin: "0px", marginTop: "20px" }}>
					<div className="col">
						<h4 className="justify-content-center align-content-center">Participantes</h4>
						<ul className="list-group">
							<li className="list-group-item">
								<span>Nombre 1</span>
							</li>
							<li className="list-group-item">
								<span>Nombre 2</span>
							</li>
							<li className="list-group-item">
								<span>Nombre 3</span>
							</li>
						</ul>
					</div>
					<div className="col">
						<h4>Correos</h4>
						<ul className="list-group">
							<li className="list-group-item">
								<span>Correo 1</span>
							</li>
							<li className="list-group-item">
								<span>Correo 2</span>
							</li>
							<li className="list-group-item">
								<span>Correo 3</span>
							</li>
						</ul>
					</div>
					<div className="col">
						<h4>Color Asignado</h4>
						<ul className="list-group">
							<li className="list-group-item">
								<span>Color 1</span>
							</li>
							<li className="list-group-item">
								<span>Color 2</span>
							</li>
							<li className="list-group-item">
								<span>Color 3</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="container" style={{ padding: "5px" }}>
				<div className="row" style={{ margin: "0px", marginTop: "30px" }}>
					<div className="col-12" style={{ paddingRight: "5px", paddingLeft: "5px" }}>
						<form>
							<div className="form-group row">
								<label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
									Descripción:
								</label>
								<div className="col-sm-9">
									<input
										type="descripcion"
										className="form-control"
										id="inputDescripcion"
										placeholder="Descripcion"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
									Objetivo:
								</label>
								<div className="col-sm-9">
									<input
										type="objetivo"
										className="form-control"
										id="inputObjetivo"
										placeholder="Objetivo"
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="container" style={{ marginTop: "14px", padding: "0px" }}>
				<h4>Revisión Temas:</h4>
				<div className="row" style={{ margin: "0px" }}>
					<div className="col">
						<label>Tema</label>
						<input type="text" />
					</div>
					<div className="col d-inline" style={{ padding: "5px" }}>
						<label>Categoria</label>
						<select>
							<optgroup label="categoria1">
								<option value="12" selected="">
									Categoria 1
								</option>
								<option value="13">Categoria 2</option>
								<option value="14">Categoria 3</option>
							</optgroup>
						</select>
					</div>
					<div className="col" style={{ padding: "5px" }}>
						<label>Asunto</label>
						<input type="text" />
					</div>
					<div className="col">
						<label>Notas&nbsp;</label>
						<input type="text" />
					</div>
					<div className="col">
						<label>Seguimiento&nbsp;</label>
						<input type="date" />
					</div>
					<div className="col">
						<i className="fa fa-trash" />
					</div>
				</div>
			</div>
			<div className="row" style={{ margin: "0px", marginLeft: "0px", marginTop: "20px" }}>
				<div className="col">
					<Link className="btn btn-danger mt-3" to="/principal" style={{ padding: "8px" }}>
						Volver
					</Link>
					<button className="btn btn-primary mt-3" type="button" style={{ padding: "8px" }}>
						Guardar
					</button>
				</div>
			</div>
		</>
	);
};

MemoDetails.propTypes = {
	match: PropTypes.object
};
