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
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<a className="nav-link" href="#">
							<i className="fa fa-check" />
							&nbsp;Archivar&nbsp;
							<br />
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							<i className="fa fa-paper-plane-o" style={{ padding: "5px" }} />
							Enviar
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							<i className="fa fa-copy" style={{ padding: "5px" }} />
							Copiar
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							<i className="fa fa-print" style={{ padding: "5px" }} />
							Imprimir
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							<i className="fa fa-trash-o" style={{ padding: "5px" }} />
							Borrar
						</a>
					</li>
					<li className="nav-item" />
				</ul>
			</div>
			<div className="container" style={{ padding: "0px" }}>
				<div className="row" style={{ margin: "0px" }}>
					<div className="col" style={{ padding: "0px" }}>
						<div>
							<h1>Datos</h1>
							<label htmlFor="Titulo Minuta">Nombre del Proyecto:&nbsp;</label>
							<input type="text" />
							<label>&nbsp;Titulo:</label>
							<input type="text" />
							<label>Fecha: 25 de Enero 2020, lugar:</label>
							<input type="text" />
						</div>
					</div>
					<div className="col" style={{ padding: "0px" }}>
						<h4>Espacio del Reloj</h4>
						<img className="d-flex justify-content-lg-center" />
						<button className="btn btn-primary" type="button" style={{ margin: "5px" }}>
							Pausar
						</button>
						<button className="btn btn-primary" type="button">
							Comenzar
						</button>
					</div>
					<div className="col" style={{ padding: "0px" }}>
						<img className="float-right d-lg-flex justify-content-lg-start" />
						<p>Logo seleccionable</p>
					</div>
				</div>
			</div>
			<div className="container" style={{ padding: "0px" }}>
				<div className="row" style={{ marginRight: "0", marginLeft: "0", marginTop: "10px" }}>
					<div className="col" style={{ padding: "0px" }}>
						<p className="justify-content-center align-content-center" style={{ marginBottom: "15px" }}>
							Minuteado por:
							<input type="text" style={{ padding: "0px", marginLeft: "30px" }} /> &nbsp;
						</p>
					</div>
				</div>
				<div className="row" style={{ margin: "0px" }}>
					<div className="col">
						<p className="justify-content-center align-content-center" style={{ marginBottom: "16px" }}>
							Participantes
						</p>
						<ul className="list-group">
							<li className="list-group-item">
								<span>List Group Item 1</span>
							</li>
							<li className="list-group-item">
								<span>List Group Item 2</span>
							</li>
							<li className="list-group-item">
								<span>List Group Item 3</span>
							</li>
						</ul>
					</div>
					<div className="col">
						<p>Correos</p>
						<ul className="list-group">
							<li className="list-group-item">
								<span>List Group Item 1</span>
							</li>
							<li className="list-group-item">
								<span>List Group Item 2</span>
							</li>
							<li className="list-group-item">
								<span>List Group Item 3</span>
							</li>
						</ul>
					</div>
					<div className="col">
						<p>Color Asignado</p>
						<ul className="list-group">
							<li className="list-group-item">
								<span>List Group Item 1</span>
							</li>
							<li className="list-group-item">
								<span>List Group Item 2</span>
							</li>
							<li className="list-group-item">
								<span>List Group Item 3</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container" style={{ padding: "5px" }}>
				<div className="row" style={{ margin: "0px", marginTop: "10px" }}>
					<div className="col-lg-1" style={{ paddingRight: "5px", paddingLeft: "5px" }}>
						<p style={{ marginBottom: "0px" }}>Descripción:</p>
					</div>
					<div className="col">
						<input type="text" />
					</div>
				</div>
				<div className="row" style={{ margin: "0px", marginTop: "10px" }}>
					<div className="col-lg-1" style={{ paddingRight: "5px", paddingLeft: "5px" }}>
						<p style={{ marginBottom: "0px" }}>Objetivo:</p>
					</div>
					<div className="col">
						<input type="text" />
					</div>
				</div>
			</div>
			<div className="container" style={{ marginTop: "14px", padding: "0px" }}>
				<h4>Minuta:</h4>
				<div className="row" style={{ margin: "0px" }}>
					<div className="col">
						<label>Tema</label>
						<input type="text" />
					</div>
					<div className="col d-inline" style={{ padding: "5px" }}>
						<label>Categoria</label>
						<select>
							<optgroup label="This is a group">
								<option value="12" selected="">
									This is item 1
								</option>
								<option value="13">This is item 2</option>
								<option value="14">This is item 3</option>
							</optgroup>
						</select>
					</div>
					<div className="col" style={{ padding: "5px" }}>
						<label>Label</label>
						<input type="text" />
					</div>
					<div className="col" style={{ padding: "5px" }}>
						<label>Asigando</label>
						<input type="color" />
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
				<div className="row" style={{ margin: "0px", marginLeft: "0px", marginTop: "20px" }}>
					<div className="col">
						<button className="btn btn-primary" type="button" style={{ padding: "8px", margin: "8px" }}>
							Guardar
						</button>
						<Link classNameName="btn btn-secondary btn-block mt-3" to="/principal">
							<button className="btn btn-danger" type="button" style={{ padding: "8px" }}>
								Volver
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

MemoDetails.propTypes = {
	match: PropTypes.object
};
