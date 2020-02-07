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
			<li className="list-group-item p-1">
				<div className="row w-100">
					<div className="col-2">
						<label>Tema</label>
						<input
							type="text"
							onChange={e => props.update(state.topic.id, e, "title")}
							value={state.topic.title}
						/>
					</div>
					<div className="col-2 d-inline">
						<label>Prioridad</label>
						<select onChange={e => props.update(e, "priority")}>
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
						<input
							type="text"
							onChange={e => props.update(state.topic.id, e, "matter")}
							value={state.topic.matter}
						/>
					</div>
					<div className="col-2">
						<label>Notas Importantes&nbsp;</label>
						<input
							type="text"
							onChange={e => props.update(state.topic.id, e, "notes")}
							value={state.topic.notes}
						/>
					</div>
					<div className="col-2">
						<label>Seguimiento&nbsp;</label>
						<input
							type="date"
							onChange={e => props.update(state.topic.id, e, "tracking")}
							value={state.topic.tracking}
						/>
					</div>
					<div className="col-1" style={{ paddingTop: "33px" }}>
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
