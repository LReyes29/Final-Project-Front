import React, { useState, useContext, useEffect } from "react";

import ReactDOM from "react-dom";
import Countdown, { zeroPad } from "react-countdown-now";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Temas } from "../component/temas.js";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const MemoDetails = props => {
	const { store, actions } = useContext(Context);

	const [newTopic, setNewTopic] = useState({
		id: 0,
		title: "",
		priority: "",
		notes: "",
		care: "",
		tracking: "",
		duration: 0
	});

	const [time, setTime] = useState(0);
	const [clockRef, setClockRef] = useState(null);

	useEffect(
		() => {
			actions.getCurrentMeeting();
		},
		[store.userMeetings]
	);

	useEffect(() => {
		let sum_time = 0;
		if (store.currentMeeting.topics != null) {
			store.currentMeeting.topics.forEach(item => {
				sum_time += item.duration;
			});
			setTime(sum_time);
		}
	}, []);

	function start() {
		clockRef.start();
	}

	function pause() {
		clockRef.pause();
	}

	// function handleChange(e, name) {
	// 	const copy_array = Object.assign({}, meeting);
	// 	copy_array[name] = e.target.value;
	// 	setMeeting(copy_array);
	// }

	function handleChangeNewTopic(e) {
		const nT = Object.assign({}, newTopic);
		nT[e.target.name] = e.target.value;
		setNewTopic(nT);
	}

	// function onCreateTopic(data) {
	// 	if (data.title) {
	// 		const copy_array = Object.assign({}, meeting);
	// 		copy_array.topics.push(data);
	// 		setMeeting(copy_array);
	// 		actions.onUpdateMeeting(meeting, props.match.params.id);
	// 	} else {
	// 		alert("Debes ingresar un título antes de ingresar este tema");
	// 	}
	// }

	// function onUpdateTopic(id, data) {
	// 	const copy_array = Object.assign({}, meeting);
	// 	const index = meeting.topics.findIndex((item, i) => {
	// 		return item.id == id;
	// 	});
	// 	copy_array.topics[index] = data;
	// 	setMeeting(copy_array);
	// 	actions.onUpdate(meeting, props.match.params.id);
	// }

	// function onDeleteTopic(id) {
	// 	// 	const copy_array = Object.assign({}, meeting);
	// 	// 	copy_array.topics = copy_array.topics.filter(item => {
	// 	// 		return item.id !== id;
	// 	// 	});
	// 	// 	setMeeting(copy_array);
	//  //  }

	return (
		<>
			<div className="container" style={{ padding: "0px" }}>
				<div className="row" style={{ margin: "0px" }}>
					<div className="col-6" style={{ padding: "0px" }}>
						<h1>Minuta Reunión</h1>
						<form>
							<div className="form-group row" style={{ marginTop: "20px" }}>
								<label htmlFor="inputProject" className="col-sm-4 col-form-label">
									Nombre Proyecto:
								</label>
								<div className="col-sm-8">
									<input
										type="text"
										name="project_name"
										onChange={e => actions.handleChangeMeeting(e)}
										className="form-control"
										value={store.currentMeeting.project_name}
										//placeholder="Proyecto"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputTitle" className="col-sm-4 col-form-label">
									Título Reunión:
								</label>
								<div className="col-sm-8">
									<input
										type="text"
										name="title"
										onChange={e => actions.handleChangeMeeting(e)}
										className="form-control"
										value={store.currentMeeting.title}
										//placeholder="Título"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputMeeting_date" className="col-sm-4 col-form-label">
									Fecha:
								</label>
								<div className="col-sm-8">
									<input
										type="date"
										name="meeting_date"
										onChange={e => actions.handleChangeMeeting(e)}
										className="form-control"
										value={store.currentMeeting.meeting_date}
										//placeholder="Fecha"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputMetting_hour" className="col-sm-4 col-form-label">
									Hora:
								</label>
								<div className="col-sm-8">
									<input
										type="time"
										name="meeting_hour"
										onChange={e => actions.handleChangeMeeting(e)}
										className="form-control"
										value={store.currentMeeting.meeting_hour}
										//placeholder="Fecha"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputPlace" className="col-sm-4 col-form-label">
									Lugar:
								</label>
								<div className="col-sm-8">
									<input
										type="text"
										name="place"
										onChange={e => actions.handleChangeMeeting(e)}
										className="form-control"
										value={store.currentMeeting.place}
										//placeholder="Lugar"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputAdmin" className="col-sm-4 col-form-label">
									Organizador:
								</label>
								<div className="col-sm-8">
									<input
										type="text"
										className="form-control"
										defaultValue={store.currentUserName}
										//placeholder="Nombre Citador"
									/>
								</div>
							</div>
						</form>
					</div>
					<div className="col-6" style={{ padding: "0px" }}>
						<div className="d-block d-flex justify-content-center mt-5 pt-5">
							<h2>Tiempo restante:</h2>
						</div>
						<div className="d-block d-flex justify-content-center">
							<h1>
								<Countdown
									id="meeting_counter"
									date={Date.now() + time * 60000}
									ref={ref => setClockRef(ref)}
									autoStart={false}
									daysInHours
									onPause={() => {
										return alert("La reunión se encuentra detenida");
									}}
									OnComplete={() => {
										return alert("La reunión ha finalizado. Muchas gracias");
									}}
								/>
							</h1>
						</div>
						<div className="d-block d-flex justify-content-lg-center">
							<button
								className="btn btn-success"
								type="button"
								onClick={() => start()}
								style={{ margin: "5px" }}>
								Iniciar
							</button>
							<button
								className="btn btn-danger"
								type="button"
								onClick={() => pause()}
								style={{ margin: "5px" }}>
								Pausar
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="container" style={{ padding: "5px" }}>
				<div className="row" style={{ margin: "0px", marginTop: "30px" }}>
					<div className="col-12" style={{ paddingRight: "5px", paddingLeft: "5px" }}>
						<form>
							<div className="form-group row">
								<label htmlFor="inputDescription" className="col-sm-2 col-form-label">
									Descripción:
								</label>
								<div className="col-sm-10">
									<input
										type="text"
										name="description"
										onChange={e => actions.handleChangeMeeting(e)}
										className="form-control"
										value={store.currentMeeting.description}
										//placeholder="Descripcion"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputTarget" className="col-sm-2 col-form-label">
									Objetivo:
								</label>
								<div className="col-sm-10">
									<input
										type="text"
										name="target"
										onChange={e => actions.handleChangeMeeting(e)}
										className="form-control"
										value={store.currentMeeting.target}
										//placeholder="Objetivo"
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="container" style={{ padding: "0px" }}>
				<div className="row" style={{ margin: "0px", marginTop: "20px" }}>
					<div className="col">
						<h4 className="justify-content-center align-content-center">Participantes</h4>
						<ul className="list-group">
							{!!store.currentMeeting.guests &&
								store.currentMeeting.guests.map((item, i) => {
									return (
										<li className="list-group-item" key={i}>
											<span>{item.fullname}</span>
										</li>
									);
								})}
						</ul>
					</div>
					<div className="col">
						<h4>Correos</h4>
						<ul className="list-group">
							{!!store.currentMeeting.guests &&
								store.currentMeeting.guests.map((item, i) => {
									return (
										<li className="list-group-item" key={i}>
											<span>{item.email}</span>
										</li>
									);
								})}
						</ul>
					</div>
					<div className="col">
						<h4>Roles</h4>
						<ul className="list-group">
							{!!store.currentMeeting.guests &&
								store.currentMeeting.guests.map((item, i) => {
									return (
										<li className="list-group-item" key={i}>
											<span>{item.rol}</span>
										</li>
									);
								})}
						</ul>
					</div>
				</div>
			</div>

			<div className="container" style={{ padding: "5px" }}>
				<h4>Revisión de Temas:</h4>
				<div className="row" style={{ margin: "0px", marginTop: "20px" }}>
					<div className="col">
						{!!store.currentMeeting.topics &&
							store.currentMeeting.topics.map((item, i) => {
								return <Temas topic={item} key={i} />;
							})}

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
										value={newTopic.title}
										onChange={e => handleChangeNewTopic(e)}
									/>
								</div>
								<div className="col-md-1 d-flex align-item-center d-flex justify-content-center px-0">
									<select
										name="priority"
										value={newTopic.priority}
										onChange={e => handleChangeNewTopic(e)}>
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
										value={newTopic.notes}
										onChange={e => handleChangeNewTopic(e)}
										style={{ width: "100%" }}
									/>
								</div>
								<div className="col-md-2 px-0">
									<input
										type="text"
										name="care"
										value={newTopic.care}
										onChange={e => handleChangeNewTopic(e)}
									/>
								</div>
								<div className="col-md-2">
									<input
										type="date"
										name="tracking"
										value={newTopic.tracking}
										onChange={e => handleChangeNewTopic(e)}
									/>
								</div>
								<div className="col-md-1">
									<i
										className={"fas fa-plus"}
										style={{ paddingLeft: "7px" }}
										onClick={() => {
											actions.onCreateTopic(newTopic);
											setNewTopic({
												id: 0,
												title: "",
												priority: "",
												notes: "",
												care: "",
												tracking: "",
												duration: 0
											});
										}}
									/>
								</div>
							</div>
						</li>
					</div>
				</div>
			</div>

			<div className="row" style={{ margin: "0px", marginLeft: "0px", marginTop: "20px" }}>
				<div className="col d-flex justify-content-center">
					<Link className="btn btn-secondary mt-3" to="/principal">
						Volver
					</Link>
					<Link className="" to="/principal">
						<button
							className="btn btn-primary mt-3"
							type="button"
							onClick={() => actions.onUpdateMeeting(store.currentMeeting, props.match.params.id)}
							style={{ marginLeft: "10px" }}>
							Guardar
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

MemoDetails.propTypes = {
	match: PropTypes.object
};
