import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="container p-md-0">
			<footer
				style={{ backgroundColor: "#192a56", paddingTop: "15px", paddingBottom: "15px", marginTop: "30px" }}>
				<div className="container">
					<div className="row d-xl-flex justify-content-xl-end">
						<div className="col item" style={{ color: "#eeeeee" }}>
							<h5>Servicios</h5>
							<ul className="list-unstyled" style={{ color: "#eeeeee" }}>
								<li style={{ color: "#eeeeee", opacity: "1" }}>
									<a href="#">Desarrollo Web</a>
								</li>
								<li>
									<a href="#">Diseño</a>
								</li>
								<li>
									<a href="#">Consultorias</a>
								</li>
							</ul>
						</div>
						<div className="col-sm-4 col-md-3 item" style={{ color: "#eeeeee" }}>
							<h5>Sobre Nosotros</h5>
							<ul className="list-unstyled">
								<li>
									<a href="#">Empresa</a>
								</li>
								<li>
									<a href="#">Equipo</a>
								</li>
								<li>
									<a href="#">Vision</a>
								</li>
							</ul>
						</div>
						<div
							className="col-lg-3 d-xl-flex justify-content-xl-end item social"
							style={{ color: "#eeeeee" }}>
							<a href="#">
								<i className="icon ion-social-facebook" style={{ padding: "10px" }} />
							</a>
							<a href="#">
								<i className="icon ion-social-instagram" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>

		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
	</footer>
);
