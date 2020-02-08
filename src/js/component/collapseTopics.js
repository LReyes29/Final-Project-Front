import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "./../store/appContext";

export const Collapse = props => {
	const { store, actions, setStore } = useContext(Context);

	const [state, setState] = useState({
		//initialize state here
		id: 0, //ES NECESARIO DEFINIR AQUÍ EL ID O SE CREA SOLO?
		meeting_id: props.meeting_id,
		title: "",
		priority: "",
		matter: "", //BORRÉ INDEX
		notes: "",
		tracking: "",
		duration: 0
	});
	//  QUE HACER EN CASO DE QUERER AGREGAR OTRO COLLAPSE?
	return (
		<>
			<p>
				<button
					className="btn btn-primary float-right p-0 mt-2"
					type="button"
					data-toggle="collapse"
					data-target="#collapseExample"
					aria-expanded="false"
					aria-controls="collapseExample">
					<i className="fa fa-plus" /> <span>Agregar Nuevo</span>
				</button>
			</p>
			<div className="collapse mt-5" id="collapseExample">
				<li className="list-group-item p-1">
					<div className="row w-100 m-0">
						<div className="col-md-2">
							<label>Título</label>
						</div>
						<div className="col-md-2 d-flex justify-content-center ml-3 pr-0">
							<label>Prioridad</label>
						</div>
						<div className="col-md-2 pl-0">
							<label>Asunto</label>
						</div>
						<div className="col-md-3 ml-3">
							<label>Notas</label>
						</div>
						<div className="col-md-2 pl-0">
							<label>Seguimiento</label>
						</div>
						<div className="col-md-1 p-0" />
					</div>
					<div className="row w-100 m-0">
						<div className="col-md-2">
							<input type="text" value={state.title} />
						</div>
						<div className="col-md-2 d-flex align-item-center d-flex justify-content-center ml-3 pr-0">
							{/* ESTA BIEN PUESTO EL ARGUMENTO VALUE SIGUIENTE? */}
							<select value={state.priority}>
								<option value="" selected="" />
								<option value="Alta">Alta</option>
								<option value="Media">Media</option>
								<option value="Baja">Baja</option>
							</select>
						</div>
						<div className="col-md-2 pl-0">
							<input type="text" value={state.matter} />
						</div>
						<div className="col-md-3 ml-3">
							<input type="text" value={state.notes} />
						</div>
						<div className="col-md-2 pl-0">
							<input type="date" onChange={() => props.create(state)} value={state.tracking} />
						</div>
						<div className="col p-0">
							<i
								className="fa fa-trash"
								onClick={() => {
									props.delete(state.id);
									setState({
										id: 0, //ES NECESARIO SETEAR AQUÍ EL ID?
										meeting_id: props.meeting_id, // Y ACA?
										title: "",
										priority: "",
										index: "",
										matter: "",
										notes: "",
										tracking: "",
										duration: ""
									});
								}}
							/>
						</div>
					</div>
				</li>
			</div>
		</>
	);
};
