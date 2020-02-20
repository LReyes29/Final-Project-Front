import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "./../store/appContext";
import { Alert } from "../component/alert.js";

export const Minutas = props => {
	const { store, actions, setStore } = useContext(Context);
	const [minutaSended, setMinutaSended] = useState(false);

	function sendData(id) {
		const currentMeet = store.userMeetings.filter(item => {
			return item.id == id;
		});
		let data = {};
		data.title = currentMeet[0].title;
		data.meeting_date = currentMeet[0].meeting_date;
		data.topics = currentMeet[0].topics;
		data.guest_mails = currentMeet[0].guests.map((item, i) => {
			return item.email;
		});

		actions.onSendMeeting(data);
		setMinutaSended(true);
	}

	function returnBaseState() {
		setMinutaSended(false);
	}

	return (
		<>
			<li className="list-group-item p-0">
				<div className="row w-100">
					<div className="col-2 text-sm-left">
						<h4 className="pl-1">
							{props.meeting.meeting_date
								.split("-")
								.reverse()
								.join("/")}
						</h4>
					</div>
					<div className="col-3 text-sm-left">
						<h4>{props.meeting.title}</h4>
					</div>
					<div className="col-4 text-sm-left pr-0">
						<h4>{props.meeting.description}</h4>
					</div>
					<div className="col-3 text-center items-center">
						<Link className="btn btn-outline-info p-0 border-0" to={"/memodetails/" + props.meeting.id}>
							<button
								type="button"
								title="Comenzar Reunión"
								className="btn"
								onClick={() => actions.saveMeetingId(props.meeting.id)}>
								<i className="fas fa-users" style={{ fontSize: "20px" }} />
							</button>
						</Link>
						<button
							title="Eliminar Reunión"
							className="btn"
							onClick={() => actions.onDeleteMeeting(props.meeting.id)}>
							<i className="fas fa-trash" />
						</button>
						<button
							title="Enviar Minuta a Asistentes"
							className="btn"
							onClick={() => sendData(props.meeting.id)}>
							<i className="far fa-paper-plane" />
						</button>
					</div>
				</div>
			</li>

			{minutaSended == true ? (
				<div style={{ marginTop: "5px" }}>
					<Alert
						type="success"
						strong="Atención,"
						message="El acta de la reunión ha sido enviada exitosamente a todos sus asistentes"
						returnState={returnBaseState}
					/>
				</div>
			) : (
				""
			)}

			{/* <div
				className="modal fade"
				id={"exampleModal" + props.id}
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Editar Minuta
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>

						<div className="modal-body">
							<form>
								<div className="form-group">
									<label>Fecha</label>
									<input
										type="text"
										onChange={e => onTransit(e, "date")}
										className="form-control"
										value={state.date}
									/>
								</div>
								<div className="form-group">
									<label>Título</label>
									<input
										type="text"
										onChange={e => onTransit(e, "title")}
										className="form-control"
										value={state.title}
									/>
								</div>
								<div className="form-group">
									<label>Descripción</label>
									<input
										type="phone"
										onChange={e => onTransit(e, "description")}
										className="form-control"
										value={state.description}
									/>
								</div>
							</form>
						</div>

						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Cerrar
							</button>
							<button
								type="button"
								className="btn btn-primary"
								data-dismiss="modal"
								onClick={() => actions.onUpdate(state, props.id)}>
								Guardar Cambios
							</button>
						</div>
					</div>
				</div>
			</div> */}
		</>
	);
};

Minutas.propTypes = {
	meeting: PropTypes.object,
	index: PropTypes.number
};
