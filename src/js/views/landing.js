import React, { useContext, useEffect } from "react";
import "../../styles/landing.css";
import { Context } from "./../store/appContext";
import Login from "../component/login.js";
import Logo from "../../img/logo.jpg";

export const Home = () => {
	return (
		<>
			<div className="bg-light shadow-lg py-5">
				<div className="container">
					<div className="row">
						<div className="p-5 col-md-7 d-flex flex-column justify-content-center">
							<h3 className="display-4 mb-3">
								ORKASTA <img src={Logo} height="60" />
							</h3>
							<p className="mb-4 lead">
								{" "}
								Seem to do well in my soul and absorb its power, like the form of a beloved mistress,
								then I often think with longing, Oh, would I could describe these conceptions.{" "}
							</p>
						</div>
						<div className="p-5 col-md-5 shadow-lg">
							<div className="container">
								<div className="row">
									<Login />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<h1>Features</h1>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-md-4 p-4 shadow-sm">
							<i className="d-block fa fa-circle fa-3x mb-2 text-muted" />
							<h4>
								<b>One</b>
							</h4>
							<p>
								{" "}
								A wonderful serenity has taken possession of my entire soul, like these sweet mornings
								of spring which I enjoy with my whole heart.{" "}
							</p>
						</div>
						<div className="col-md-4 col-6 p-4">
							<i className="d-block fa fa-stop-circle-o fa-3x mb-2 text-muted" />
							<h4>
								<b>Two</b>
							</h4>
							<p>
								{" "}
								I am alone, and feel the charm of existence in this spot, which was created for the
								bliss of souls like mine. I am so happy, my dear friend.{" "}
							</p>
						</div>
						<div className="col-md-4 col-6 p-4">
							<i className="d-block fa fa-circle-o fa-3x mb-2 text-muted" />
							<h4>
								<b>Three</b>
							</h4>
							<p>
								{" "}
								I feel that I never was a greater artist than now. When, while the lovely valley teems
								with vapour around me.{" "}
							</p>
						</div>
					</div>
				</div>
			</div>

			<script
				src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
				integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
				crossOrigin="anonymous"
			/>
			<script
				src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
				integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
				crossOrigin="anonymous"
			/>
			<script
				src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
				integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
				crossOrigin="anonymous"
			/>
		</>
	);
};
