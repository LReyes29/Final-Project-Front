import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "./../store/appContext";

export const Temas = props => {
	const { store, actions } = useContext(Context);
	const [changingTopic, setChangingTopic] = useState(props.topic);

	useEffect(
		() => {
			setChangingTopic(props.topic);
		},
		[props.topic]
	);

	function handleChangeInput(e) {
		const data = Object.assign({}, changingTopic);
		data[e.target.name] = e.target.value;
		setChangingTopic(data);
	}

	function alreadyChecked() {
		if (props.topic.title != "" && props.topic.priority != "") {
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
						<input
							type="text"
							name="title"
							value={changingTopic.title}
							onChange={e => handleChangeInput(e)}
						/>
					</div>
					<div className="col-md-1 d-flex align-item-center d-flex justify-content-center px-0">
						<select name="priority" value={changingTopic.priority} onChange={e => handleChangeInput(e)}>
							<option value="" />
							<option value="Alta">Alta</option>
							<option value="Media">Media</option>
							<option value="Baja">Baja</option>
						</select>
					</div>
					<div className="col-md-4 pl-0">
						<input
							type="text"
							name="notes"
							value={changingTopic.notes}
							onChange={e => handleChangeInput(e)}
							style={{ width: "100%" }}
						/>
					</div>
					<div className="col-md-2 px-0">
						<input
							type="text"
							name="care"
							value={changingTopic.care}
							onChange={e => handleChangeInput(e)}
						/>
					</div>
					<div className="col-md-2">
						<input
							type="date"
							name="tracking"
							value={changingTopic.tracking}
							onChange={e => handleChangeInput(e)}
						/>
					</div>
					<div className="col-md-1">
						<i
							className={"fas fa-check" + (alreadyChecked() ? "-double disabled" : "")}
							style={{ paddingLeft: "7px" }}
							onClick={() => {
								actions.onUpdateTopic(changingTopic, props.topic.id);
							}}
						/>{" "}
						<i
							className="fa fa-trash"
							style={{ paddingLeft: "7px", paddingRight: "5px" }}
							onClick={() => {
								actions.onDeleteTopic(props.topic.id);
							}}
						/>
					</div>
				</div>
			</li>
		</>
	);
};

Temas.propTypes = {
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
