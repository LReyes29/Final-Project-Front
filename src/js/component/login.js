import React from "react";
<<<<<<< HEAD
import PropTypes from "prop-types";
=======
import { Redirect } from "react-router-dom";
>>>>>>> a950d693112e9330492d1454e5850b159123728e
import { Alert } from "reactstrap";
import "../../styles/landing.css";
import { Context } from "./../store/appContext";

class Login extends React.Component {
	static contextType = Context;
	constructor(props) {
		super(props);
		this.state = {
			id: null,
			name: "",
			email: "",
			password: "",
			repeated_pass: "123",
<<<<<<< HEAD
=======
			red: false,
>>>>>>> a950d693112e9330492d1454e5850b159123728e
			visibleAlerta: false,
			estadoAlerta: "",
			alertMessage: ""
		};
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
			visibleAlerta: false
		});
	};

	onSubmitRegister = (e, history) => {
		e.preventDefault();
		const contexto = this.context;
		var url = "http://localhost:5000/api/users";
		let form = {
			fullname: this.state.name,
			email: this.state.email,
			password: this.state.password,
			repeated_pass: this.state.repeated_pass
		};
<<<<<<< HEAD
=======

>>>>>>> a950d693112e9330492d1454e5850b159123728e
		fetch(url, {
			method: "POST", // or 'PUT'
			body: JSON.stringify(form), // data can be `string` or {object}!
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => {
<<<<<<< HEAD
				if (response.status == "Success") {
					contexto.actions.putCurrentUser(response.id, response.fullname);
					this.setState({ id: response.id });
					history.push("/principal");
=======
				if (response.status == "Succes") {
					contexto.actions.putCurrentUser(response.id, response.fullname);
					this.setState({ id: response.id });
					this.setState({ red: true });
>>>>>>> a950d693112e9330492d1454e5850b159123728e
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

	onSubmitLogin = (e, history) => {
		e.preventDefault();
		const contexto = this.context;
		var url = "http://localhost:5000/user/login";
		let form = {
			email: this.state.email,
			password: this.state.password
		};
		if (form.email != null && form.password != null) {
			fetch(url, {
				method: "POST", // or 'PUT'
				body: JSON.stringify(form), // data can be `string` or {object}!
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(res => res.json())
				.then(response => {
<<<<<<< HEAD
					if (response.status == "Success") {
						contexto.actions.putCurrentUser(response.id, response.fullname);
						this.setState({ id: response.id });
						history.push("/principal");
=======
					if (response.status == "Succes") {
						contexto.actions.putCurrentUser(response.id, response.fullname);
						this.setState({ id: response.id });
						this.setState({ red: true });
>>>>>>> a950d693112e9330492d1454e5850b159123728e
					}
					if (response.status == "Alerta") {
						this.setState({
							alertMessage: response.msg,
							estadoAlerta: response.status
						});
						this.setState({ estadoAlerta: true });
						this.AlertToggle();
					}
				})
				.catch(error => console.error("Error:", error));
		}
	};

	AlertToggle() {
		this.setState({
			visibleAlerta: !this.state.visibleAlerta
		});
	}

	render() {
<<<<<<< HEAD
=======
		if (this.state.red) {
			return <Redirect to="/principal" />;
		}
		const alerta = {
			status: "Alerta",
			mensaje: "prueba"
		};
>>>>>>> a950d693112e9330492d1454e5850b159123728e
		return (
			<div className="col-md-12">
				<ul className="nav nav-tabs pl-5 border-0">
					<li className="nav-item bg-secondary rounded-top shadow-sm">
						<a href="" className="nav-link active" data-toggle="tab" data-target="#tabone">
							Login
						</a>
					</li>
					<li className="nav-item bg-secondary rounded-top text-light shadow-sm">
						<a className="nav-link" href="" data-toggle="tab" data-target="#tabtwo">
							Register
						</a>
					</li>
				</ul>
				<div className="tab-content mt-2">
					<div className="tab-pane fade show active" id="tabone" role="tabpanel">
						<h3 className="mb-3">Login</h3>
						<form>
							<div className="form-group">
								<label>Email</label>
								<input
									className="form-control"
									name="email"
									placeholder="Email"
									required="required"
									type="email"
									onChange={e => this.handleChange(e)}
								/>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input
									type="password"
									name="password"
									className="form-control"
									placeholder="Password"
									required="required"
									onChange={e => {
										this.handleChange(e);
									}}
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
								onClick={e => this.onSubmitLogin(e, this.props.history)}
								className="btn mt-4 btn-block btn-outline-dark p-2">
								<b>Login</b>
							</button>
						</form>
					</div>
					<div className="tab-pane fade" id="tabtwo" role="tabpanel">
						<h3 className="mb-3">Register</h3>
						<form>
							<div className="form_group">
								<label>Nombre completo</label>
								<input
									className="form-control"
									placeholder="Nombre completo"
									required="required"
									type="text"
									name="name"
									onChange={e => this.handleChange(e)}
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									className="form-control"
									name="email"
									placeholder="Email"
									required="required"
									type="email"
									onChange={e => this.handleChange(e)}
								/>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									required="required"
									name="password"
									onChange={e => this.handleChange(e)}
								/>
							</div>
							<div className="form-group">
								<label>Repeat Password</label>
								<input
									type="password"
									className="form-control"
									placeholder="Repeat Password"
									required="required"
									name="repeated_pass"
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
								onClick={e => this.onSubmitRegister(e, this.props.history)}
								className="btn mt-4 btn-block btn-outline-dark p-2">
								<b>Register</b>
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;

Login.propTypes = {
	history: PropTypes.object
};
