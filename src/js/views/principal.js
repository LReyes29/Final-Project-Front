import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Minutas } from "../component/minutas.js";
import "../../styles/home.scss";
import { Context } from "./../store/appContext";
import { Redirect } from "react-router";

export const Principal = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getFilteredMinutas("http://localhost:5000/api/meetings");
	}, []);

	const getLastMeeting = () => {
		let UMeetings = [];
		UMeetings = store.userMeetings;
		UMeetings.sort(function(a, b) {
			let dateA = new Date(a.create_date),
				dateB = new Date(b.create_date);
			return dateA - dateB;
		});
		actions.saveMeetingId(UMeetings[UMeetings.length - 1].id);
	};

	return (
		<div className="container">
			<div className="container">
				<div className="row" style={{ marginTop: "30px" }}>
					<div className="col-4">
						<Link to="/newmeeting">
							<button type="button" className="btn btn-outline-primary">
								<i className="fa fa-plus" /> Crear nueva reunión
							</button>
						</Link>
					</div>
					<div className="col-4" />
					<div className="col-4" />
				</div>
				<div className="row" style={{ marginTop: "20px" }}>
					<div className="col-4 align-self-end" style={{ fontSize: "200%" }}>
						<i className="fa fa-folder" />{" "}
						<span>
							<strong>Minutas</strong>
						</span>
					</div>
					<div className="col-4" />
					<div className="col-4 d-flex justify-content-end">
						{store.userMeetings.length > 0 ? (
							<Link className="btn p-0 border-0" to={"/memodetails/" + store.currentMeetingId}>
								<button type="button" className="btn btn-outline-dark" onClick={() => getLastMeeting()}>
									Abrir última minuta creada
								</button>
							</Link>
						) : (
							""
						)}
					</div>
				</div>
			</div>

			<div className="container" style={{ marginTop: "20px" }}>
				<div className="row">
					<div className="col-2 text-sm-left p-0">
						<h2>Fecha</h2>
					</div>
					<div className="col-3 text-sm-left p-0">
						<h2>Título</h2>
					</div>
					<div className="col-4 text-sm-left p-0">
						<h2>Descripción</h2>
					</div>
					<div className="col-3 text-center p-0 pr-4">
						<h2>Acciones</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-12 p-0" aria-expanded="true">
						<ul className="list-group pull-down" id="minuta-list">
							{!!store.userMeetings &&
								store.userMeetings.map((item, i) => {
									return <Minutas meeting={item} key={i} index={i} />;
								})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
