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
		index: props.index,
		matter: "",
		notes: "",
		tracking: "",
		duration: ""
	});
	//  QUE HACER EN CASO DE QUERER AGREGAR UN OTRO COLLAPSE?
	return (
		<>
			<p>
				<button
					className="btn btn-primary"
					type="button"
					data-toggle="collapse"
					data-target="#collapseExample"
					aria-expanded="false"
					aria-controls="collapseExample">
					<i className="fa fa-plus" /> <span>Agregar Nuevo</span>
				</button>
			</p>
			<div className="collapse" id="collapseExample">
				<div className="card card-body">
					<li className="list-group-item p-1">
						<div className="row w-100">
							<div className="col-2">
								<label>Tema</label>
								<input type="text" value={state.title} />
							</div>
							<div className="col-2 d-inline">
								<label>Prioridad</label>
								{/* ESTA BIEN PUESTO EL ARGUMENTO VALUE SIGUIENTE? */}
								<select value={state.priority}>
									<optgroup>
										<option value="Alta" selected="">
											Alta
										</option>
										<option value="Media">Media</option>
										<option value="Baja">Baja</option>
									</optgroup>
								</select>
							</div>
							<div className="col-2">
								<label>Asunto&nbsp;</label>
								<input type="text" value={state.matter} />
							</div>
							<div className="col-2">
								<label>Notas Importantes&nbsp;</label>
								<input type="text" value={state.notes} />
							</div>
							<div className="col-2">
								<label>Seguimiento&nbsp;</label>
								<input type="date" onChange={() => props.create(state)} value={state.tracking} />
							</div>
							{/* ESTA BIEN QUE EL EVENTO ANTERIOR SEA UN ONCHANGE?                       */}
							<div className="col-1" style={{ paddingTop: "33px" }}>
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
			</div>
		</>
	);
};
