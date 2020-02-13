import React from "react";
import { Redirect } from "react-router-dom";

class ProfileArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Juanito Perez super ejemplo",
			email: "ejemplo@example.cl",
			password: "123456",
			repeated_pass: "",
			red: false
		};
	}

	edit = e => {
		this.setState({
			red: true
		});
	};

	render() {
		if (this.state.red) {
			return <Redirect to="/principal" />;
		}
		return (
			<>
				<div className="row">
					<h2>Hola {this.state.name}</h2>
				</div>
				<div className="row">
					<div className="col-md-8">
						<ul>
							<li>Nombre: {this.state.name}</li>
							<li>Email: {this.state.email}</li>
							<li>Contraseña: {this.state.password}</li>
						</ul>
					</div>
				</div>
			</>
		);
	}
}
export default ProfileArea;
{
	/*
<h2>Profile for {this.state.name}</h2>;

 <ul>
                  <li>Email address: {this.state.email}</li>
                  <li>Password: {this.state.password}</li>
                </ul>
                <button onClick={e => this.edit(e)} className="btn mt-4 btn-block btn-outline-dark p-2">
                  <b>Editar</b>
                </button> */
}
