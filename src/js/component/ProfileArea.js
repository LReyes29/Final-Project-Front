import React from "react";
import { Context } from "./../store/appContext";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";
import "../../styles/landing.css";

class ProfileArea extends React.Component {
	static contextType = Context;
	constructor(props) {
		super(props);
		this.state = {
			id: null,
			name: null,
			email: null,
			password: null,
			repeated_pass: "123",
			visibleAlerta: false,
			estadoAlerta: "",
			alertMessage: ""
		};
	}
	UNSAFE_componentWillMount() {
		this.getUSerInfo();
	}
	getUSerInfo() {
		const contexto = this.context;
		let user_id = contexto.actions.getCurrentUser("id");
		this.setState({ id: user_id });
		let user_name = contexto.actions.getCurrentUser("name");
		this.setState({ name: user_name });
		var url = "http://localhost:5000/api/users/" + user_id;
		fetch(url, {
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => resp.json())
			.then(response =>
				this.setState({
					email: response.email,
					password: response.password
				})
			);
	}
	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
			visibleAlerta: false
		});
	};
	onSubmitUser = (e, history) => {
		e.preventDefault();
		const contexto = this.context;
		var url = "http://localhost:5000/api/users/" + this.state.id;
		let form = {
			fullname: this.state.name,
			email: this.state.email,
			password: this.state.password,
			repeated_pass: this.state.repeated_pass
		};
		fetch(url, {
			method: "PUT",
			body: JSON.stringify(form),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => {
				if (response.status == "Success") {
					contexto.actions.putCurrentUser(response.id, response.fullname);
					history.push("/principal");
				}
				if (response.status == "Alerta") {
					this.setState({
						alertMessage: response.msg,
						estadoAlerta: response.status
					});
					this.AlertToggle();
				}
			})
			.catch(error => console.error("Error:", error));
	};
	AlertToggle() {
		this.setState({
			visibleAlerta: !this.state.visibleAlerta
		});
	}
	render() {
		return (
			<>
				<div className="row">
					<div className="col-md-1" />
					<div className="col-md-6">
						<ul id="lista-perfil" className="p-3 pt-5" style={{ listStyle: "none" }}>
							<li className="pb-3 pt-5 flex">
								<div className="d-inline">
									<i className="fas fa-caret-right d-inline" style={{ fontSize: "35px" }} />
									<h3 className="d-inline pl-3">Nombre: {this.state.name}</h3>
								</div>
							</li>
							<li className="pb-3">
								<div className="d-inline">
									<i className="fas fa-caret-right d-inline" style={{ fontSize: "35px" }} />
									<h3 className="d-inline pl-3">Email: {this.state.email}</h3>
								</div>
							</li>
							<li>
								<div className="d-inline">
									<i className="fas fa-caret-right d-inline" style={{ fontSize: "35px" }} />
									<h3 className="d-inline pl-3">Contraseña: {this.state.password}</h3>
								</div>
							</li>
						</ul>
					</div>
					<div className="col-md-4 pt-5">
						<form id="rendered-form">
							<div className="rendered-form">
								<div className="">
									<h1 access="false" id="control-5042391">
										Edita Tu Perfil
									</h1>
								</div>
								<div className="formbuilder-text form-group field-name">
									<label htmlFor="name" className="formbuilder-text-label">
										Nombre Completo
										<span className="formbuilder-required">*</span>
									</label>
									<input
										type="text"
										placeholder={this.state.name}
										className="form-control"
										name="name"
										access="false"
										id="name"
										required="required"
										aria-required="true"
										autoComplete="off"
										onChange={e => this.handleChange(e)}
									/>
								</div>
								<div className="formbuilder-text form-group field-email">
									<label htmlFor="email" className="formbuilder-text-label">
										Email
										<span className="formbuilder-required">*</span>
									</label>
									<input
										type="email"
										placeholder={this.state.email}
										className="form-control"
										name="email"
										access="false"
										id="email"
										required="required"
										aria-required="true"
										autoComplete="off"
										onChange={e => this.handleChange(e)}
									/>
								</div>
								<div className="formbuilder-text form-group field-password">
									<label htmlFor="password" className="formbuilder-text-label">
										Nueva Contraseña
										<span className="formbuilder-required">*</span>
									</label>
									<input
										type="password"
										placeholder="Password"
										className="form-control"
										name="password"
										access="false"
										id="password"
										required="required"
										aria-required="true"
										autoComplete="off"
										onChange={e => this.handleChange(e)}
									/>
								</div>
								<div className="formbuilder-text form-group field-repeated_pass">
									<label htmlFor="repeated_pass" className="formbuilder-text-label">
										Repetir Nueva Contraseña
										<span className="formbuilder-required">*</span>
									</label>
									<input
										type="password"
										placeholder="Password"
										className="form-control"
										name="repeated_pass"
										access="false"
										id="repeated_pass"
										required="required"
										aria-required="true"
										autoComplete="off"
										onChange={e => this.handleChange(e)}
									/>
								</div>
								<Alert
									color="danger"
									isOpen={this.state.visibleAlerta}
									role="alert"
									toggle={this.AlertToggle.bind(this)}>
									{this.state.alertMessage}
								</Alert>
								<button
									type="submit"
									className="btn mt-3 btn-block btn-outline-dark p-1"
									onClick={e => this.onSubmitUser(e, this.props.history)}>
									<b>Guardar Cambios</b>
								</button>
							</div>
						</form>
					</div>
					<div className="col-md-1" />
				</div>
			</>
		);
	}
}
export default ProfileArea;
ProfileArea.propTypes = {
	history: PropTypes.object
};
