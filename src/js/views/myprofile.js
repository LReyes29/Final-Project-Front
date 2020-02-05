import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { Context } from "./../store/appContext";

export const MyProfile = () => {
	return (
		<div>
			<div className="container" style={{ padding: "0px" }}>
				<div className="row" style={{ margin: "0px", marginTop: "15px" }}>
					<div className="col" style={{ padding: "0px" }}>
						<h4>Perfil de usuario</h4>
					</div>
				</div>
				<div className="row" style={{ margin: "0px" }}>
					<div className="col-lg-1 d-flex align-self-center align-items-lg-center" style={{ padding: "0px" }}>
						<p className="d-inline-flex d-lg-flex align-items-lg-center">Nombre:</p>
					</div>
					<div className="col">
						<input className="form-control-plaintext" type="text" value="Plain Text Value" readOnly="" />
					</div>
				</div>
				<div className="row" style={{ margin: "0px" }}>
					<div className="col-lg-1" style={{ padding: "0px" }}>
						<p>Apellido:</p>
					</div>
					<div className="col">
						<input className="form-control-plaintext" type="text" value="Plain Text Value" readOnly="" />
					</div>
				</div>
				<div className="row" style={{ margin: "0px" }}>
					<div className="col-lg-1" style={{ padding: "0px" }}>
						<p>Correo electronico:</p>
					</div>
					<div className="col">
						<input className="form-control-plaintext" type="text" value="Plain Text Value" readOnly="" />
					</div>
				</div>
				<div className="row" style={{ margin: "0px" }}>
					<div className="col-lg-1" style={{ padding: "0px" }}>
						<p>Telefono:</p>
					</div>
					<div className="col">
						<input className="form-control-plaintext" type="text" value="Plain Text Value" readOnly="" />
					</div>
				</div>
			</div>
			<div className="container" style={{ padding: "0px", marginTop: "15px" }}>
				<h4>Clave de Acceso</h4>
				<div className="row" style={{ margin: "0px" }}>
					<div className="col-lg-2" style={{ padding: "0px" }}>
						<p>Ingresar Clave Actual:</p>
					</div>
					<div className="col">
						<input className="form-control-plaintext" type="text" value="Plain Text Value" readOnly="" />
					</div>
				</div>
				<div className="row" style={{ margin: "0px" }}>
					<div className="col-lg-2" style={{ padding: "0px" }}>
						<p>Ingresar Nueva Clave:</p>
					</div>
					<div className="col">
						<input
							className="form-control-plaintext"
							type="text"
							value="ingrese su nueva clave"
							readOnly=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
