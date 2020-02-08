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
						<h4>{props.user_memo.meeting_date}</h4>
					</div>
					<div className="col-3 text-center text-sm-left">
						<h4>{props.user_memo.title}</h4>
					</div>
					<div className="col-3 text-center text-sm-left">
						<h4>{props.user_memo.description}</h4>
					</div>
					<div className="col-3 text-center items-center">
						<Link className="btn btn-outline-info p-0 border-0" to={"/memodetails/" + props.user_memo.id}>
							<button
								type="button"
								className="btn"
								//data-toggle="modal"
								//data-target={"#exampleModal" + props.id}
							>
								<i className="far fa-edit" />
							</button>
						</Link>
						<button className="btn" onClick={() => actions.onDelete(props.user_memo.id)}>
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
