import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "./../store/appContext";

export const Temas = props => {
	const { store, actions } = useContext(Context);
	const [topic, setTopic] = useState(props.item);

	function handleChangeTopic(e, name) {
		const data = Object.assign({}, topic);
		data[name] = e.target.value;
		setTopic(data);
	}

	function alreadyChecked() {
		if (props.item.title != "" && props.item.priority != "") {
			return true;
		}
		return false;
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
						<input type="text" value={topic.title} onChange={e => handleChangeTopic(e, "title")} />
					</div>
					<div className="col-md-1 d-flex align-item-center d-flex justify-content-center px-0">
						<select value={topic.priority} onChange={e => handleChangeTopic(e, "priority")}>
							<option value="" />
							<option value="Alta">Alta</option>
							<option value="Media">Media</option>
							<option value="Baja">Baja</option>
						</select>
					</div>
					<div className="col-md-4 pl-0">
						<input
							type="text"
							value={topic.notes}
							onChange={e => handleChangeTopic(e, "notes")}
							style={{ width: "100%" }}
						/>
					</div>
					<div className="col-md-2 px-0">
						<input type="text" value={topic.care} onChange={e => handleChangeTopic(e, "care")} />
					</div>
					<div className="col-md-2">
						<input type="date" value={topic.tracking} onChange={e => handleChangeTopic(e, "tracking")} />
					</div>
					<div className="col-md-1">
						<i
							className={"fas fa-check" + (alreadyChecked() ? "-double" : "")}
							style={{ paddingLeft: "7px" }}
							onClick={() => {
								actions.onUpdateTopic(topic, topic.id);
							}}
						/>{" "}
						<i
							className="fa fa-trash"
							style={{ paddingLeft: "7px", paddingRight: "5px" }}
							onClick={() => {
								actions.onDeleteTopic(topic.id);
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
