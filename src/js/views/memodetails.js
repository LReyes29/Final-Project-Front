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
				care: "Roberto Soto",
				tracking: "",
				duration: 30
			},
			{
				id: 2,
				meeting_id: 1,
				title: "Tema2",
				priority: "",
				notes: "",
				care: "",
				tracking: "",
				duration: 45
			}
		],
		guests: [
			{
				id: 1,
				meeting_id: 1,
				fullname: "Roman",
				email: "roman@gmail.com",
				rol: "oyente"
			},
			{
				id: 2,
				meeting_id: 1,
				fullname: "Veronica",
				email: "roman@gmail.com",
				rol: "coordinadora"
			}
		],
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
	const [flag, setFlag] = useState({
		flag1: false,
		flag2: false,
		flag3: false
	});

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
				//ESTA BIEN ESTE ARRAY EN BASE AL BACKEND?
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

	function handleChange(e, name) {
		const copy_array = Object.assign({}, state);
		copy_array[name] = e.target.value;
		setState(copy_array);
	}

	function handleChangeTopic(e, name) {
		const copy_array = Object.assign({}, topic);
		copy_array[name] = e.target.value;
		setTopic(copy_array);
	}

	$("#submit-errors").hide();
	$("#foo").on("click", function() {
		console.log("here");
		$("#submit-errors").show(); //or slideDown() for effect
	});

	function onCreateTopic(data) {
		if (data.title) {
			const copy_array = Object.assign({}, state);
			copy_array.topics.push(data);
			setState(copy_array);
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
		} // SE DEBE HACER UN FETCH POST Y LUEGO FETCH GET PARA QUE DEVUELVA EL NUEVO TOPIC CON UN ID ASIGNADO
		else {
			alert("Debes ingresar un título antes de ingresar este tema");
		}
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
		//const index = state.topics.findIndex((item, i) => {
		//	return item.id == id;
		//});
		//copy_array.topics.splice(index, 1);

		const copy_array = Object.assign({}, state);
		copy_array.topics = copy_array.topics.filter(item => {
			return item.id !== id;
		});
		setState(copy_array);
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
										onChange={e => handleChange(e, "project_name")}
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
										onChange={e => handleChange(e, "title")}
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
										type="date"
										onChange={e => handleChange(e, "meeting_date")}
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
										type="time"
										onChange={e => handleChange(e, "meeting_hour")}
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
										onChange={e => handleChange(e, "place")}
										className="form-control"
										value={state.place}
										placeholder="Lugar"
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
										onChange={e => handleChange(e, "admin")}
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

			<div className="container" style={{ padding: "0px" }}>
				<div className="row" style={{ margin: "0px", marginTop: "20px" }}>
					<div className="col">
						<h4 className="justify-content-center align-content-center">Participantes</h4>
						<ul className="list-group">
							{!!state.guests &&
								state.guests.map((item, i) => {
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
							{!!state.guests &&
								state.guests.map((item, i) => {
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
							{!!state.guests &&
								state.guests.map((item, i) => {
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
										onChange={e => handleChange(e, "description")}
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
										onChange={e => handleChange(e, "target")}
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
							console.log(item.title);
							return <Temas item={item} key={i} update={onUpdateTopic} delete={onDeleteTopic} />;
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
										value={topic.title}
										onChange={e => handleChangeTopic(e, "title")}
									/>
								</div>
								<div className="col-md-1 d-flex align-item-center d-flex justify-content-center px-0">
									<select value={topic.priority} onChange={e => handleChangeTopic(e, "priority")}>
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
										onChange={e => handleChangeTopic(e, "notes")}
										style={{ width: "100%" }}
									/>
								</div>
								<div className="col-md-2 px-0">
									<input
										type="text"
										value={topic.care}
										onChange={e => handleChangeTopic(e, "care")}
									/>
								</div>
								<div className="col-md-2">
									<input
										type="date"
										value={topic.tracking}
										onChange={e => handleChangeTopic(e, "tracking")}
									/>
								</div>
								<div className="col-md-1">
									<i
										className={"fas fa-plus"}
										style={{ paddingLeft: "7px" }}
										onClick={() => {
											onCreateTopic(topic);
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
						{/* <button
							type="button"
							className="btn btn-outline-info float-right mt-2"
							onClick={() => {
								alreadyChecked(topic.id)
									? setTopic({
											id: "",
											meeting_id: state.id,
											title: "",
											priority: "",
											notes: "",
											care: "",
											tracking: "",
											duration: 0
									  })
									: alert("Debe guardar el tema actual antes de crear uno nuevo");
							}}>
							<i className="fa fa-plus" />
						</button> */}
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
