import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link to="/">
							<span className="navbar-brand mb-0 h1">Home</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/principal">
							<span className="navbar-brand mb-0 h1">PrincipalPanel</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/newmeeting">
							<span className="navbar-brand mb-0 h1">NewMeeting</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/myprofile">
							<span className="navbar-brand mb-0 h1">MyProfile</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/payment">
							<span className="navbar-brand mb-0 h1">Payment</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/memo">
							<span className="navbar-brand mb-0 h1">Memorandum</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
