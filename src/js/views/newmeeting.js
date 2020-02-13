import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const NewMeeting = props => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		//LA TABLA MEETING SERÁ ASÍ AL HACERLE FETCH?
		id: 1,
		user_id: 1,
		admin: "",
		create_date: "",
		meeting_date: "",
		meeting_hour: "",
		project_name: "",
		title: "",
		topics: [
			{
				id: 1,
				meeting_id: 1,
				title: "",
				priority: "",
				notes: "",
				care: "",
				tracking: "",
				duration: ""
			}
		],
		guests: [
			{
				id: 1,
				meeting_id: 1,
				fullname: "",
				email: "",
				rol: ""
			}
		],
		place: "",
		description: "",
		target: ""
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
	}, []);
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
	function onCreateTopic() {
		const copy_array = Object.assign({}, state);
		copy_array.topics.push({
			id: "",
			meeting_id: "",
			title: "",
			priority: "",
			notes: "",
			care: "",
			tracking: "",
			duration: ""
		});
		setState(copy_array);
		// SE DEBE HACER UN FETCH POST Y LUEGO FETCH GET PARA QUE DEVUELVA EL NUEVO TOPIC CON UN ID ASIGNADO
	}
	function handleChangeGuest(e, name, i) {
		const copy_array = Object.assign({}, state);
		copy_array.guests[i][name] = e.target.value;
		setState(copy_array);
	}
	function handleChangeTopic(e, name, i) {
		const copy_array = Object.assign({}, state);
		copy_array.topics[i][name] = e.target.value;
		setState(copy_array);
	}
	function addGuest() {
		const copy_array = Object.assign({}, state);
		copy_array.guests.push({
			id: "",
			meeting_id: "",
			fullname: "",
			email: "",
			rol: ""
		});
		setState(copy_array);
	}
	function addTopic() {
		const copy_array = Object.assign({}, state);
		copy_array.topics.push({
			id: "",
			meeting_id: "",
			title: "",
			priority: "",
			notes: "",
			care: "",
			tracking: "",
			duration: ""
		});
		setState(copy_array);
	}
	function deleteGuest(i) {
		const copy_array = Object.assign({}, state);
		copy_array.guests.splice(i, 1);
		setState(copy_array);
	}
	function deleteTopic(i) {
		const copy_array = Object.assign({}, state);
		copy_array.topics.splice(i, 1);
		setState(copy_array);
	}
	const sumaGuest = (
		<button
			type="button"
			className="btn btn-outline-info float-left"
			onClick={() => {
				addGuest();
			}}>
			<i className="fa fa-plus" />
		</button>
	);
	const restaGuest = i => {
		return (
			<button
				type="button"
				className="btn btn-outline-info float-left"
				onClick={() => {
					deleteGuest(i);
				}}>
				<i className="fas fa-minus" />
			</button>
		);
	};
	const sumaTopic = (
		<button
			type="button"
			className="btn btn-outline-info float-left"
			onClick={() => {
				addTopic();
			}}>
			<i className="fa fa-plus" />
		</button>
	);
	const restaTopic = i => {
		return (
			<button
				type="button"
				className="btn btn-outline-info float-left"
				onClick={() => {
					deleteTopic(i);
				}}>
				<i className="fas fa-minus" />
			</button>
		);
	};
	return (
		<div>
			<div className="container" style={{ padding: "0px" }}>
				<div className="row" style={{ margin: "0px" }}>
					<div className="col-6" style={{ padding: "0px" }}>
						<h1>Nueva Reunión</h1>
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
										className="form-control"
										onChange={e => handleChange(e, "meeting_date")}
										name="meeting_date"
										value={state.meeting_date}
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
										name="usr_time"
										className="form-control"
										value={state.meeting_hour}
									/>
									<small id="hora" className="form-text text-muted">
										Hora en formato 24hrs
									</small>
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
						</form>
					</div>
				</div>
			</div>
			<div className="container" style={{ padding: "0px" }}>
				<div className="row" style={{ margin: "0px", marginTop: "0px" }}>
					<label htmlFor="inputParticipante" className="col-sm-4 col-form-label">
						<h4 className="justify-content-center align-content-center">Participantes</h4>
					</label>
					<label htmlFor="inputParticipante" className="col-sm-4 col-form-label">
						<h4 className="justify-content-center align-content-center">Correo</h4>
					</label>
					<label htmlFor="inputParticipante" className="col-sm-4 col-form-label">
						<h4 className="justify-content-center align-content-center">Rol</h4>
					</label>
				</div>
				{state.guests.map((item, i) => {
					return (
						<div className="row" style={{ margin: "0px", marginTop: "0px" }} key={i}>
							<form style={{ width: "100%" }}>
								<div className="form-group row" style={{ marginBottom: "15px" }}>
									<div className="col-md-4">
										<input
											type="text"
											onChange={e => handleChangeGuest(e, "fullname", i)}
											className="form-control"
											value={item.fullname}
											placeholder="Nombre Completo"
										/>
									</div>
									<div className="col-md-4">
										<input
											type="text"
											onChange={e => handleChangeGuest(e, "email", i)}
											className="form-control"
											value={item.email}
											placeholder="Correo"
										/>
									</div>
									<div className="col-md-3">
										<input
											type="text"
											onChange={e => handleChangeGuest(e, "rol", i)}
											className="form-control"
											value={item.rol}
											placeholder="Rol"
										/>
									</div>
									<div className="col-md-1">
										{i === state.guests.length - 1 ? sumaGuest : restaGuest(i)}
									</div>
								</div>
							</form>
						</div>
					);
				})}
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
			<div className="container" style={{ padding: "0px" }}>
				<div className="row" style={{ margin: "0px", marginTop: "0px" }}>
					<label htmlFor="inputParticipante" className="col-sm-4 col-form-label">
						<h4 className="justify-content-center align-content-center">Temas</h4>
					</label>
					<label htmlFor="inputParticipante" className="col-sm-4 col-form-label">
						<h4 className="justify-content-center align-content-center">Tiempo Asignado</h4>
					</label>
				</div>
				{state.topics.map((item, i) => {
					return (
						<div className="row" style={{ margin: "0px", marginTop: "0px" }} key={i}>
							<form style={{ width: "100%" }}>
								<div className="form-group row" style={{ marginTop: "0px" }}>
									<div className="col-md-4">
										<input
											type="text"
											onChange={e => handleChangeTopic(e, "title", i)}
											className="form-control"
											value={item.title}
											placeholder="Describa el tema"
										/>
									</div>
									<div className="col-md-4">
										<input
											type="time"
											onChange={e => handleChangeTopic(e, "duration", i)}
											name="usr_time"
											className="form-control"
											value={item.duration}
										/>
										<small id="hora" className="form-text text-muted">
											Tiempo en minutos
										</small>
									</div>
									<div className="col-md-1">
										{i === state.topics.length - 1 ? sumaTopic : restaTopic(i)}
									</div>
								</div>
							</form>
						</div>
					);
				})}
			</div>
			<div className="container" style={{ padding: "5px" }}>
				<div className="row" style={{ margin: "0px", marginLeft: "0px", marginTop: "0px" }}>
					<div className="col d-flex justify-content-left pl-1">
						<Link className="btn btn-secondary mt-3" to="/principal">
							Volver
						</Link>
						<Link className="" to="/principal">
							<button
								className="btn btn-primary mt-3"
								type="button"
								onClick={() => actions.onCreate(state)}
								style={{ marginLeft: "10px" }}>
								Guardar
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
