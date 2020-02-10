import React, { useState } from "react";
import "../../styles/landing.css";

export default function Login(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className="col-md-12">
			<ul className="nav nav-tabs">
				<li className="nav-item bg-secondary rounded-top">
					<a href="" className="active nav-link" data-toggle="tab" data-target="#tabone">
						Login
					</a>
				</li>
				<li className="nav-item bg-secondary rounded-top">
					<a className="nav-link" href="" data-toggle="tab" data-target="#tabtwo">
						Register
					</a>
				</li>
			</ul>
			<div className="tab-content mt-2">
				<div className="tab-pane fade show active" id="tabone" role="tabpanel">
					<form>
						<div className="form-group">
							<label>Email</label>
							<input className="form-control" placeholder="Email" required="required" type="email" />
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								required="required"
							/>
						</div>
						<button type="submit" className="btn mt-4 btn-block btn-outline-dark p-2">
							<b>Login</b>
						</button>
					</form>
				</div>
				<div className="tab-pane fade" id="tabtwo" role="tabpanel">
					<form>
						<div className="form-group">
							<label>Email</label>
							<input className="form-control" placeholder="Email" required="required" type="email" />
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								required="required"
							/>
						</div>
						<div className="form-group">
							<label>Repeat Password</label>
							<input
								type="password"
								className="form-control"
								placeholder="Repeat Password"
								required="required"
							/>
						</div>
						<button type="submit" className="btn mt-4 btn-block btn-outline-dark p-2">
							<b>Register</b>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

// const LoginPage = props => {
// 	const signupWasClickedCallback = data => {
// 		console.log(data);
// 		alert("Signup callback, see log on the console to see the data.");
// 	};
// 	const loginWasClickedCallback = data => {
// 		console.log(data);
// 		alert("Login callback, see log on the console to see the data.");
// 	};
// 	const recoverPasswordWasClickedCallback = data => {
// 		console.log(data);
// 		alert("Recover password callback, see log on the console to see the data.");
//     };

//     const mystyle = {
//         backgroundColor: "#A8DADC",
//         border : 0,
//       };

// 	return (
// 		<div classNameName="p-5 col-md-5 shadow-lg">
// 			<ReactSignupLoginComponent
// 				title="Tu dale"
// 				handleSignup={signupWasClickedCallback}
// 				handleLogin={loginWasClickedCallback}
// 				handleRecoverPassword={recoverPasswordWasClickedCallback}
// 				styles={{
// 					mainWrapper: { backgroundColor: "#A8DADC"  },

// 					signup: {
// 						wrapper: { backgroundColor: "yellow" },
// 						inputWrapper: { backgroundColor: "AliceBlue" },
// 						buttonsWrapper: { backgroundColor: "Aqua" },
// 						input: { backgroundColor: "LavenderBlush" },
// 						recoverPassword: {},
// 						button: { backgroundColor: "LightCoral" }
// 					},
// 					login: {
// 						wrapper: { backgroundColor: "yellow" },
// 						inputWrapper: { backgroundColor: "AliceBlue" },
// 						buttonsWrapper: { backgroundColor: "Aqua" },
// 						input: { backgroundColor: "LavenderBlush" },
// 						recoverPasswordWrapper: { backgroundColor: "MediumBlue" },
// 						recoverPasswordButton: { backgroundColor: "OldLace " },
// 						button: { backgroundColor: "LightCoral" }
// 					},
// 					recoverPassword: {
// 						wrapper: { backgroundColor: "yellow" },
// 						inputWrapper: { backgroundColor: "AliceBlue" },
// 						buttonsWrapper: { backgroundColor: "Aqua" },
// 						input: { backgroundColor: "LavenderBlush" },
// 						button: { backgroundColor: "LightCoral" }
// 					}
// 				}}
// 			/>
// 		</div>
// 	);
// };

// export default LoginPage;
