import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "./../store/appContext";

export const Temas = props => {
	const { store, actions } = useContext(Context);
	//const [changingTopic, setChangingTopic] = useState(props.index);

	// useEffect(
	// 	() => {
	// 		setChangingTopic(props.topic);
	// 	},
	// 	[props.topic]
	// );

	// function handleChangeInput(e) {
	// 	const data = Object.assign({}, changingTopic);
	// 	data[e.target.name] = e.target.value;
	// 	setChangingTopic(data);
	// }

	function alreadyChecked() {
		if (
			props.topic.title != "" &&
			props.topic.priority != "" &&
			props.topic.notes != "" &&
			props.topic.care != "" &&
			props.topic.tracking != ""
		) {
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
							//value={changingTopic.title}
							value={store.currentMeeting.topics[props.index].title}
							onChange={e => actions.handleChangeTopic(e, props.index)}
						/>
					</div>
					<div className="col-md-1 d-flex align-item-center d-flex justify-content-center px-0">
						<select
							name="priority"
							//value={changingTopic.priority}
							value={store.currentMeeting.topics[props.index].priority}
							onChange={e => actions.handleChangeTopic(e, props.index)}>
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
							//value={changingTopic.notes}
							value={store.currentMeeting.topics[props.index].notes}
							onChange={e => actions.handleChangeTopic(e, props.index)}
							style={{ width: "100%" }}
						/>
					</div>
					<div className="col-md-2 px-0">
						<input
							type="text"
							name="care"
							//value={changingTopic.care}
							value={store.currentMeeting.topics[props.index].care}
							onChange={e => actions.handleChangeTopic(e, props.index)}
						/>
					</div>
					<div className="col-md-2">
						<input
							type="date"
							name="tracking"
							//value={changingTopic.tracking}
							value={store.currentMeeting.topics[props.index].tracking}
							onChange={e => actions.handleChangeTopic(e, props.index)}
						/>
					</div>
					<div className="col-md-1">
						<i
							className={"fas fa-check" + (alreadyChecked() ? "-double" : "")}
							style={{ paddingLeft: "7px" }}
							// onClick={() => {
							// 	props.update(store.currentMeeting.topics[props.index]);
							// }}
						/>{" "}
						<i
							className="fa fa-trash"
							style={{ paddingLeft: "7px", paddingRight: "5px" }}
							onClick={() => {
								actions.onDeleteTopic(store.currentMeeting.topics[props.index].id);
							}}
						/>
					</div>
				</div>
			</li>
		</>
	);
};

// Temas.propTypes = {
// 	id: PropTypes.number,
// 	meeting_id: PropTypes.number,
// 	title: PropTypes.string,
// 	priority: PropTypes.string,
// 	notes: PropTypes.string,
// 	care: PropTypes.string,
// 	tracking: PropTypes.string,
// 	duration: PropTypes.number
// };

// Temas.defaultProps = {
// 	onDelete: null
// };
