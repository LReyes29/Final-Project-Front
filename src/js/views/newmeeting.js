import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { Context } from "./../store/appContext";

export const NewMeeting = props => {
	return (
		<div>
			<div className="container" style={{ padding: "0px" }}>
				<div className="d-inline-flex" style={{ minWidth: "auto", width: "720px" }}>
					<div className="col" style={{ paddingRight: "5px", paddingLeft: "5px" }}>
						<h5 style={{ padding: "0px", maxWidth: "auto", marginTop: "10px" }}>Agenda de Temas</h5>
						<input
							type="text"
							style={{ width: "310px", paddingTop: "5px", paddingBottom: "5px", marginBottom: "5px" }}
						/>
						<input
							type="text"
							style={{
								width: "310px",
								paddingTop: "5px",
								paddingBottom: "5px",
								paddingLeft: "5px",
								marginBottom: "5px",
								marginTop: "5px"
							}}
						/>
						<input
							type="text"
							style={{ width: "310px", marginTop: "5px", padding: "5px", paddingTop: "5px" }}
						/>
						<i className="fa fa-plus" style={{ marginLeft: "5px" }} />
						<div className="col" style={{ paddingRight: "5px", paddingLeft: "5px", width: "300px" }}>
							<h5 style={{ padding: "0px", marginTop: "10px" }}>Tiempos Propuestos</h5>
							<input type="text" style={{ width: "300px", padding: "5px", marginBottom: "5px" }} />
							<input type="text" style={{ width: "300px", padding: "5px", marginTop: "5px" }} />
							<input type="text" style={{ width: "300px", padding: "5px", marginTop: "10px" }} />
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col" style={{ padding: "5px", marginBottom: "5px" }}>
						<h5 style={{ marginTop: "10px" }}>Invitados</h5>
						<div className="row" style={{ margin: "0px" }}>
							<div className="col" style={{ padding: "2px" }}>
								<input type="email" style={{ padding: "0px" }} />
								<i className="fa fa-plus" style={{ padding: "5px" }} />
							</div>
						</div>
					</div>
				</div>
				<div className="row" style={{ margin: "0px" }}>
					<div className="col" style={{ padding: "5px" }}>
						<ul className="list-group">
							<li className="list-group-item">
								<span>HACER COMPONENTE EMAILS</span>{" "}
							</li>
						</ul>
					</div>
					<div className="col" style={{ paddingLeft: "5px" }}>
						<h5 style={{ marginTop: "10px" }}>Seleccione Fechas</h5>
						<div className="row" style={{ margin: "0px" }}>
							<input className="form-control-lg" type="date" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col" style={{ paddingLeft: "5px", marginBottom: "55px" }}>
						<button className="btn btn-danger" type="button" style={{ margin: "10px" }}>
							Cancelar
						</button>
						<button className="btn btn-primary" type="button">
							Enviar Información a Invitados
						</button>
					</div>
					<div className="col" />
				</div>
			</div>
		</div>
	);
};
