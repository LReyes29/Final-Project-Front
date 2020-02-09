import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "./../store/appContext";

export const Temas = props => {
	const { store, actions, setStore } = useContext(Context);

	const [topic, setTopic] = useState({
		id: props.item.id,
		meeting_id: props.item.meeting_id,
		title: props.item.title,
		priority: props.item.priority,
		notes: props.item.notes,
		care: props.item.care,
		tracking: props.item.tracking,
		duration: props.item.duration
	});

	function onUpdate(e, name) {
		const data = Object.assign({}, topic);
		data[name] = e.target.value;
		setTopic(data);
	}

	return (
		<>
			<li className="list-group-item p-1">
				<div className="row w-100 m-0">
					<div className="col-md-2 px-0">
						<label>Título</label>
					</div>
					<div className="col-md-1 d-flex justify-content-center px-0">
						<label>Prioridad</label>
					</div>
					<div className="col-md-4 pl-0">
						<label>Notas</label>
					</div>
					<div className="col-md-2 px-0">
						<label>Responsable</label>
					</div>
					<div className="col-md-2">
						<label>Seguimiento</label>
					</div>
					<div className="col-md-1" />
				</div>
				<div className="row w-100 m-0">
					<div className="col-md-2 px-0">
						<input type="text" value={topic.title} onChange={e => onUpdate(e, "title")} />
					</div>
					<div className="col-md-1 d-flex align-item-center d-flex justify-content-center px-0">
						<select value={topic.priority} onChange={e => onUpdate(e, "priority")}>
							<option value="" selected="" />
							<option value="Alta">Alta</option>
							<option value="Media">Media</option>
							<option value="Baja">Baja</option>
						</select>
					</div>
					<div className="col-md-4 pl-0">
						<input
							type="text"
							value={topic.notes}
							onChange={e => onUpdate(e, "notes")}
							style={{ width: "100%" }}
						/>
					</div>
					<div className="col-md-2 px-0">
						<input type="text" value={topic.care} onChange={e => onUpdate(e, "care")} />
					</div>
					<div className="col-md-2">
						<input type="date" value={topic.tracking} onChange={e => onUpdate(e, "tracking")} />
					</div>
					<div className="col-md-1">
						<i
							//REVISAR CONDICION, DEBIERA SER MEJOR CUANDO LE HAGO CLICK, NO CUANDO YA ESTÁ EN EL STATE
							className={"fas fa-check" + (props.checked(topic.id) ? "-double" : "")}
							style={{ paddingLeft: "7px" }}
							onClick={() => {
								props.update(topic.id, topic);
							}}
						/>{" "}
						<i
							className="fa fa-trash"
							style={{ paddingLeft: "7px", paddingRight: "5px" }}
							onClick={() => {
								props.delete(topic.id);
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
	checked: PropTypes.func,

	id: PropTypes.number,
	meeting_id: PropTypes.number,
	title: PropTypes.string,
	priority: PropTypes.string,
	notes: PropTypes.string,
	care: PropTypes.string,
	tracking: PropTypes.string,
	duration: PropTypes.number
};

Temas.defaultProps = {
	onDelete: null
};
