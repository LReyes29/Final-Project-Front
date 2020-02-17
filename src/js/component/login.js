import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "../../styles/landing.css";
import { Context } from "./../store/appContext";
import getState from "../store/flux.js";

// class Login extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = getState();
// 	}

// 	handleChange = e => {
// 		e.preventDefault();
// 		this.setState({
// 			[e.target.name]: e.target.value
// 		});
// 	};

// 	onSubmitRegister = e => {
// 		e.preventDefault();
// 		let form = {
// 			name: this.state.name,
// 			email: this.state.email,
// 			password: this.state.password,
// 			repeated_pass: this.state.repeated_pass
// 		};

// 		{
// 			/* Aqui se manda a la api y devuelve un user id*/
// 			/* database.push(form);
// 				return user_id
// 			*/
// 		}
// 		let new_user_id = 15;

// 		if (this.state.password === this.state.repeated_pass) {
// 			this.setState({
// 				user_id: new_user_id,
// 				name: this.state.name,
// 				email: this.state.email,
// 				password: this.state.password,
// 				red: true
// 			});
// 		}
// 	};

// 	onSubmitLogin = e => {
// 		e.preventDefault();
// 		let form = {
// 			email: this.state.email,
// 			password: this.state.password
// 		};

// 		{
// 			/*
// 				database.push(form);
// 				Aqui se manda a la api y devuelve un user id
// 				database.push(form);
// 				return user_id,
// 			*/
// 		}

// 		let new_user_id = 16;

// 		if (this.state.password) {
// 			this.setState({
// 				user_id: new_user_id,
// 				name: this.state.name,
// 				email: this.state.email,
// 				password: this.state.password,
// 				red: true
// 			});
// 		}
// 	};

// 	render() {
// 		if (this.state.red) {
// 			return <Redirect to="/principal" />;
// 		}
// 		return (
// 			<div className="col-md-12">
// 				<ul className="nav nav-tabs pl-5 border-0">
// 					<li className="nav-item bg-secondary rounded-top shadow-sm">
// 						<a href="" className="nav-link active" data-toggle="tab" data-target="#tabone">
// 							Login
// 						</a>
// 					</li>
// 					<li className="nav-item bg-secondary rounded-top text-light shadow-sm">
// 						<a className="nav-link" href="" data-toggle="tab" data-target="#tabtwo">
// 							Register
// 						</a>
// 					</li>
// 				</ul>
// 				<div className="tab-content mt-2">
// 					<div className="tab-pane fade show active" id="tabone" role="tabpanel">
// 						<h3 className="mb-3">Login</h3>
// 						<form>
// 							<div className="form-group">
// 								<label>Email</label>
// 								<input
// 									className="form-control"
// 									name="email"
// 									placeholder="Email"
// 									required="required"
// 									type="email"
// 									onChange={e => this.handleChange(e)}
// 								/>
// 							</div>
// 							<div className="form-group">
// 								<label>Password</label>
// 								<input
// 									type="password"
// 									name="password"
// 									className="form-control"
// 									placeholder="Password"
// 									required="required"
// 									onChange={e => this.handleChange(e)}
// 								/>
// 							</div>
// 							<button
// 								onClick={e => this.onSubmitLogin(e)}
// 								className="btn mt-4 btn-block btn-outline-dark p-2">
// 								<b>Login</b>
// 							</button>
// 						</form>
// 					</div>
// 					<div className="tab-pane fade" id="tabtwo" role="tabpanel">
// 						<h3 className="mb-3">Register</h3>
// 						<form>
// 							<div className="form_group">
// 								<label>Nombre completo</label>
// 								<input
// 									className="form-control"
// 									placeholder="Nombre completo"
// 									required="required"
// 									type="text"
// 									name="name"
// 									onChange={e => this.handleChange(e)}
// 								/>
// 							</div>
// 							<div className="form-group">
// 								<label>Email</label>
// 								<input
// 									className="form-control"
// 									name="email"
// 									placeholder="Email"
// 									required="required"
// 									type="email"
// 									onChange={e => this.handleChange(e)}
// 								/>
// 							</div>
// 							<div className="form-group">
// 								<label>Password</label>
// 								<input
// 									type="password"
// 									className="form-control"
// 									placeholder="Password"
// 									required="required"
// 									name="password"
// 									onChange={e => this.handleChange(e)}
// 								/>
// 							</div>
// 							<div className="form-group">
// 								<label>Repeat Password</label>
// 								<input
// 									type="password"
// 									className="form-control"
// 									placeholder="Repeat Password"
// 									required="required"
// 									name="repeated_pass"
// 									onChange={e => this.handleChange(e)}
// 								/>
// 							</div>
// 							<button
// 								type="submit"
// 								onClick={e => this.onSubmitRegister(e)}
// 								className="btn mt-4 btn-block btn-outline-dark p-2">
// 								<b>Register</b>
// 							</button>
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default Login;

function Login() {
	const [state, setState] = getState();
	const data = useContext(Context);

	function handleChange(e) {
		e.preventDefault();
		setState({
			[e.target.name]: e.target.value
		});
	}

	function onSubmitRegister(e) {
		e.preventDefault();
		let form = {
			name: state.currentUserName,
			email: state.email,
			password: state.password,
			repeated_pass: state.repeated_pass
		};

		{
			/* Aqui se manda a la api y devuelve un user id*/
			/* database.push(form);
				return user_id
			*/
		}
		let new_user_id = 15;

		if (state.password === state.repeated_pass) {
			setState({
				user_id: new_user_id,
				name: state.name,
				email: state.email,
				password: state.password,
				red: true
			});
		}
	}

	function onSubmitLogin(e) {
		e.preventDefault();
		let form = {
			email: state.email,
			password: state.password
		};

		{
			/*
					database.push(form);
					Aqui se manda a la api y devuelve un user id
					database.push(form);
					return user_id,
				*/
		}

		let new_user_id = 16;

		if (state.password) {
			setState({
				user_id: new_user_id,
				name: state.name,
				email: state.email,
				password: state.password,
				red: true
			});
		}
	}

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
								onChange={e => handleChange(e)}
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
								onChange={e => handleChange(e)}
							/>
						</div>
						<button onClick={e => onSubmitLogin(e)} className="btn mt-4 btn-block btn-outline-dark p-2">
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
								onChange={e => handleChange(e)}
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
								onChange={e => handleChange(e)}
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
								onChange={e => handleChange(e)}
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
								onChange={e => handleChange(e)}
							/>
						</div>
						<button
							type="submit"
							onClick={e => onSubmitRegister(e)}
							className="btn mt-4 btn-block btn-outline-dark p-2">
							<b>Register</b>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
