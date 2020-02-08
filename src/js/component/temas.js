import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "./../store/appContext";

export const Temas = props => {
	const { store, actions, setStore } = useContext(Context);

	const [state, setState] = useState({
		//initialize state here
		topic: props.meeting_topic
	});

	return (
		<>
			{/* COMO HACER QUE LAS ROWS DE LOS TEMAS ABARQUEN TODO EL ANCHO DE LA VIEW?  */}

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
						<input
							type="text"
							onChange={e => props.update(state.topic.id, e, "title")}
							value={state.topic.title}
						/>
					</div>
					<div className="col-md-2 d-flex align-item-center d-flex justify-content-center ml-3 pr-0">
						<select onChange={e => props.update(e, "priority")}>
							<option value="" selected="" />
							<option value="Alta">Alta</option>
							<option value="Media">Media</option>
							<option value="Baja">Baja</option>
						</select>
					</div>
					<div className="col-md-2 pl-0">
						<input
							type="text"
							onChange={e => props.update(state.topic.id, e, "matter")}
							value={state.topic.matter}
						/>
					</div>
					<div className="col-md-3 ml-3">
						<input
							type="text"
							onChange={e => props.update(state.topic.id, e, "notes")}
							value={state.topic.notes}
						/>
					</div>
					<div className="col-md-2 pl-0">
						<input
							type="date"
							onChange={e => props.update(state.topic.id, e, "tracking")}
							value={state.topic.tracking}
						/>
					</div>
					<div className="col p-0">
						<i
							className="fa fa-trash"
							onClick={() => {
								props.delete(state.topic.id);
								setState({
									id: 2, //ES NECESARIO SETEAR AQUÍ EL ID?
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
		</>
	);
};

Temas.propTypes = {
	update: PropTypes.func,
	delete: PropTypes.func,

	id: PropTypes.number,
	topic: PropTypes.string
};

Temas.defaultProps = {
	onDelete: null
};
