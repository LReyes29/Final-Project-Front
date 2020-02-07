import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<nav
				className="navbar navbar-light navbar-expand-md navigation-clean"
				style={{ backgroundColor: "#192a56" }}>
				<div className="container">
					<Link to="/principal">
						<a className="navbar-brand" href="#" style={{ color: "#f2f5f8" }}>
							Orkasta
						</a>
					</Link>
					<button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
						<span className="sr-only">Toggle navigation</span>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navcol-1">
						<ul className="nav navbar-nav ml-auto">
							<li className="nav-item" role="presentation" />
							<li className="nav-item" role="presentation" />
							<li className="nav-item" role="presentation" />
							<li className="nav-item dropdown show">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
									style={{ color: "#f2f5f8" }}>
									Cuenta&nbsp;
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<Link to="/principal">
										<a className="dropdown-item" href="#">
											Panel Principal
										</a>
									</Link>
									<Link to="/myprofile">
										<a className="dropdown-item" href="#">
											Mi Perfil
										</a>
									</Link>
									<Link to="/payment">
										<a className="dropdown-item" href="#">
											Pago
										</a>
									</Link>
									<Link to="/">
										<a className="dropdown-item" href="#">
											Salir
										</a>
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
