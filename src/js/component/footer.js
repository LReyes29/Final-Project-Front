import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto text-center">
		<footer style={{ backgroundColor: "#192a56", paddingTop: "15px", paddingBottom: "15px", marginTop: "30px" }}>
			<div className="py-3 bg-dark text-info">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<p className="mb-0">© 2020 ORKASTA. All rights reserved</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<p>
			Made with <i className="fa fa-heart text-danger" /> by students in{" "}
			<a style={{ color: "black" }} href="http://www.4geeksacademy.com">
				4Geeks Academy
			</a>
		</p>
	</footer>
);
