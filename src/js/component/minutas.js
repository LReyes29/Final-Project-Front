import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "./../store/appContext";

export const Minutas = props => {
	const { store, actions, setStore } = useContext(Context);

	return (
		<>
			<li className="list-group-item p-1">
				<div className="row w-100">
					<div className="col-3 text-center text-sm-left">
						<h4>{props.meeting.meeting_date}</h4>
					</div>
					<div className="col-3 text-center text-sm-left">
						<h4>{props.meeting.title}</h4>
					</div>
					<div className="col-3 text-center text-sm-left">
						<h4>{props.meeting.description}</h4>
					</div>
					<div className="col-3 text-center items-center">
						<Link className="btn btn-outline-info p-0 border-0" to={"/memodetails/" + props.meeting.id}>
							<button
								type="button"
								className="btn"
								onClick={() => actions.saveMeetingId(props.meeting.id)}>
								<i className="far fa-edit" />
							</button>
						</Link>
						<button className="btn" onClick={() => actions.onDeleteMeeting(props.meeting.id)}>
							<i className="fas fa-trash" />
						</button>
						<button
							className="btn disabled"
							// onClick={() => actions.onSend(state.id)}
						>
							<i className="far fa-paper-plane" />
						</button>
					</div>
				</div>
			</li>
		</>
	);
};

Minutas.propTypes = {
	onDelete: PropTypes.func,

	id: PropTypes.string,
	date: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	duration: PropTypes.string,
	topics_num: PropTypes.number,
	index: PropTypes.number
};

Minutas.defaultProps = {
	onDelete: null
};
