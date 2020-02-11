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

	const [state, setState] = useState({
		id: 1,
		user_id: 1,
		admin: "Luis Reyes",
		create_date: "01-01-2020",
		meeting_date: "23-03-2020",
		meeting_hour: "14:30 pm",
		project_name: "Proyecto1",
		title: "Reunion RRHH",
		topics: [
			{
				id: 1,
				meeting_id: 1,
				title: "Tema1",
				priority: "",
				notes: "Area comercial debe revisar",
				care: "Roberto Jara",
				tracking: "",
				duration: 30
			},
			{
				id: 2,
				meeting_id: 1,
				title: "Tema2",
				priority: "",
				notes: "Supervisión jefe de planta",
				care: "Alicia Pacheco",
				tracking: "",
				duration: 45
			}
		],
		guest_names: ["Roman", "Julian", "Veronica"],
		guest_emails: ["roman@gmail.com", "julian@gmail.com", "vero@gmail.com"],
		guest_roles: ["reemplazo", "coordinador", "oyente"],
		place: "Sala Reuniones",
		description: "Revisión sueldos empleados planta Quilicura",
		target: "Reajuste Sueldos"
	});

	const [topic, setTopic] = useState({
		id: "",
		meeting_id: state.id,
		title: "",
		priority: "",
		notes: "",
		care: "",
		tracking: "",
		duration: 0
	});

	const [time, setTime] = useState(0);
	const [clockRef, setClockRef] = useState(null);

	// function getFetch{
	// 	url => {
	// 		fetch(url)
	// 			.then(resp => resp.json())
	// 			.then(data => setState({ data }));
	// 	}
	// }

	useEffect(() => {
		// 	getFetch("#" + props.match.params.id);

		let sum_time = 0;
		if (!!state.topics) {
			state.topics.forEach(item => {
				//CONDICIONAR EL forEach AL CURRENT USER y AL CURRENT MEETING
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

	function onUpdate(e, name) {
		const copy_array = Object.assign({}, state);
		copy_array[name] = e.target.value;
		setState(copy_array);
	}

	function onUpdate2(e, name) {
		const copy_array = Object.assign({}, topic);
		copy_array[name] = e.target.value;
		setTopic(copy_array);
	}

	function onCreateTopic(data) {
		const copy_array = Object.assign({}, state);
		copy_array.topics.push(data);
		setState(copy_array);
		// SE DEBE HACER UN FETCH POST Y LUEGO FETCH GET PARA QUE DEVUELVA EL NUEVO TOPIC CON UN ID ASIGNADO
	}

	function onUpdateTopic(id, data) {
		const copy_array = Object.assign({}, state);
		const index = state.topics.findIndex((item, i) => {
			return item.id == id;
		});
		copy_array.topics[index] = data;
		setState(copy_array);
	}
	function onDeleteTopic(id) {
		const copy_array = Object.assign({}, state);
		const index = state.topics.findIndex((item, i) => {
			return item.id == id;
		});
		// CUANDO OCUPO ESTA FUNCION, A PESAR QUE ELIMINA CORRECTAMENTE, EL COMPONENTE TEMAS RENDERIZA MAL
		copy_array.topics.splice(index, 1);
		setState(copy_array);
	}

	function alreadyChecked(id) {
		for (var i = 0; i < state.topics.length; i++) {
			if (state.topics[i].id == id) {
				return true;
			}
		}
		return false;
	}

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
										onChange={e => onUpdate(e, "project_name")}
										className="form-control"
										value={state.project_name}
										placeholder="Proyecto"
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
										onChange={e => onUpdate(e, "title")}
										className="form-control"
										value={state.title}
										placeholder="Título"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputMeeting_date" className="col-sm-4 col-form-label">
									Fecha:
								</label>
								<div className="col-sm-8">
									<input
										type="text"
										onChange={e => onUpdate(e, "meeting_date")}
										className="form-control"
										value={state.meeting_date}
										placeholder="Fecha"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputMetting_hour" className="col-sm-4 col-form-label">
									Hora:
								</label>
								<div className="col-sm-8">
									<input
										type="text"
										onChange={e => onUpdate(e, "meeting_hour")}
										className="form-control"
										value={state.meeting_hour}
										placeholder="Fecha"
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
										onChange={e => onUpdate(e, "place")}
										className="form-control"
										value={state.place}
										placeholder="Lugar"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputAdmin" className="col-sm-4 col-form-label">
									Citación hecha por:
								</label>
								<div className="col-sm-8">
									<input
										type="text"
										onChange={e => onUpdate(e, "admin")}
										className="form-control"
										value={state.admin}
										placeholder="Nombre Citador"
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
										return alert(
											"La reunión se ha terminado, Muchas gracias por su asistencia. Hasta la Próxima !"
										);
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

			<div className="container" style={{ padding: "0px" }}>
				<div className="row" style={{ margin: "0px", marginTop: "20px" }}>
					<div className="col">
						<h4 className="justify-content-center align-content-center">Participantes</h4>
						<ul className="list-group">
							{!!state.guest_names &&
								state.guest_names.map((item, i) => {
									return (
										<li className="list-group-item" key={i}>
											<span>{item}</span>
										</li>
									);
								})}
						</ul>
					</div>
					<div className="col">
						<h4>Correos</h4>
						<ul className="list-group">
							{!!state.guest_emails &&
								state.guest_emails.map((item, i) => {
									return (
										<li className="list-group-item" key={i}>
											<span>{item}</span>
										</li>
									);
								})}
						</ul>
					</div>
					<div className="col">
						<h4>Roles</h4>
						<ul className="list-group">
							{!!state.guest_roles &&
								state.guest_roles.map((item, i) => {
									return (
										<li className="list-group-item" key={i}>
											<span>{item}</span>
										</li>
									);
								})}
						</ul>
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
										onChange={e => onUpdate(e, "description")}
										className="form-control"
										value={state.description}
										placeholder="Descripcion"
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
										onChange={e => onUpdate(e, "target")}
										className="form-control"
										value={state.target}
										placeholder="Objetivo"
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="container" style={{ padding: "5px" }}>
				<h4>Revisión de Temas:</h4>
				<div className="row" style={{ margin: "0px", marginTop: "20px" }}>
					<div className="col">
						{state.topics.map((item, i) => {
							return (
								<Temas
									item={item}
									key={i}
									update={onUpdateTopic}
									delete={onDeleteTopic}
									checked={alreadyChecked}
								/>
							);
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
									<input type="text" value={topic.title} onChange={e => onUpdate2(e, "title")} />
								</div>
								<div className="col-md-1 d-flex align-item-center d-flex justify-content-center px-0">
									<select value={topic.priority} onChange={e => onUpdate2(e, "priority")}>
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
										onChange={e => onUpdate2(e, "notes")}
										style={{ width: "100%" }}
									/>
								</div>
								<div className="col-md-2 px-0">
									<input type="text" value={topic.care} onChange={e => onUpdate2(e, "care")} />
								</div>
								<div className="col-md-2">
									<input
										type="date"
										value={topic.tracking}
										onChange={e => onUpdate2(e, "tracking")}
									/>
								</div>
								<div className="col-md-1">
									<i
										//REVISAR CONDICION, DEBIERA SER MEJOR CUANDO LE HAGO CLICK, NO CUANDO YA ESTÁ EN EL STATE
										className={"fas fa-check" + (alreadyChecked(topic.id) ? "-double" : "")}
										style={{ paddingLeft: "7px" }}
										onClick={() => {
											onCreateTopic(topic);
											setTopic({
												id: "",
												meeting_id: state.topics.meeting_id,
												title: "",
												priority: "",
												notes: "",
												care: "",
												tracking: "",
												duration: 0
											});
										}}
									/>{" "}
									<i
										className="fa fa-trash"
										style={{ paddingLeft: "7px", paddingRight: "5px" }}
										onClick={() => {
											onDeleteTopic(topic.id);
										}}
									/>
								</div>
							</div>
						</li>
						<button
							type="button"
							className="btn btn-outline-info float-right mt-2"
							onClick={() => {
								//ESTA BIEN QUE COMPRUEBE PRIMERO SI EL TEMA ACTUAL YA SE CREÓ?, SINO PARA GUARDARLO AHORA.
								alreadyChecked(topic.id) ? "" : onCreateTopic(topic);
								setTopic({
									id: "",
									meeting_id: state.id,
									title: "",
									priority: "",
									notes: "",
									care: "",
									tracking: "",
									duration: 0
								});
							}}>
							<i className="fa fa-plus" />
						</button>
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
							onClick={() => actions.onUpdate(state)}
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
