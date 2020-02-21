import React from "react";
import { Redirect } from "react-router-dom";
import { Context } from "./../store/appContext";
import { string } from "prop-types";

class ProfileArea extends React.Component {
	static contextType = Context;
	constructor(props) {
		super(props);
		this.state = {
			id: null,
			name: null,
			email: null,
			password: null,
			repeated_pass: "123"
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

		var url = "http://127.0.0.1:5000/api/users/" + user_id;
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
			[e.target.name]: e.target.value
		});
	};

	onSubmitUser = e => {
		e.preventDefault();
		const contexto = this.context;

		var url = "http://127.0.0.1:5000/api/users/" + this.state.id;

		let form = {
			fullname: this.state.name,
			email: this.state.email,
			password: this.state.password
		};

		if (this.state.password === this.state.repeated_pass) {
			fetch(url, {
				method: "PUT",
				body: JSON.stringify(form), // data can be `string` or {object}!
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(res => res.json())
				.then(response => {
					contexto.actions.putCurrentUser(response.id, response.fullname),
						this.setState({ id: response.id, red: true });
				})
				.catch(error => console.error("Error:", error));
		}
	};

	render() {
		return (
			<>
				<div className="row">
					<div className="col-md-8">
						<ul className="p-3 pt-5">
							<li className="pb-3">
								<h3>Nombre: {this.state.name}</h3>
							</li>
							<li className="pb-3">
								<h3>Email: {this.state.email}</h3>
							</li>
							<li>
								<h3>Contraseña: {this.state.password}</h3>
							</li>
						</ul>
					</div>
					<div className="col-md-4">
						<form autoComplete="off" id="rendered-form">
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
										Contraseña
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
										Contraseña
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

								<button
									type="submit"
									className="btn mt-4 btn-block btn-outline-dark p-2"
									onClick={e => this.onSubmitUser(e)}>
									<b>Guardar</b>
								</button>
							</div>
						</form>
					</div>
				</div>
			</>
		);
	}
}
export default ProfileArea;
