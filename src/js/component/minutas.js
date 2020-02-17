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
						<h4>{props.memo.meeting_date}</h4>
					</div>
					<div className="col-3 text-center text-sm-left">
						<h4>{props.memo.title}</h4>
					</div>
					<div className="col-3 text-center text-sm-left">
						<h4>{props.memo.description}</h4>
					</div>
					<div className="col-3 text-center items-center">
						<Link className="btn btn-outline-info p-0 border-0" to={"/memodetails/" + props.memo.id}>
							<button type="button" className="btn">
								<i className="far fa-edit" />
							</button>
						</Link>
						<button className="btn" onClick={() => actions.onDeleteMeeting(props.memo.id)}>
							<i className="fas fa-trash" />
						</button>
						<button
							className="btn"
							// onClick={() => actions.onSend(state.id)} // ESTA FUNCION QUEDARÁ PENDIENTE DE IMPLEMENTAR
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
