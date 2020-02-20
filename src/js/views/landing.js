import React, { useContext, useEffect } from "react";
import "../../styles/landing.css";
import { Context } from "./../store/appContext";
import Login from "../component/login.js";
import favicon from "../../img/Logo_banner.png";
import getState from "../store/flux.js";

export const Home = () => {
	return (
		<>
			<div className="bg-light shadow-lg py-5">
				<div className="container">
					<div className="row">
						<div className="p-5 col-md-7 d-flex flex-column justify-content-center">
							<h1 className="display-4 mb-3">
								<img src={favicon} height="80" />
							</h1>
							<p className="mb-4 lead">
								{" "}
								Seem to do well in my soul and absorb its power, like the form of a beloved mistress,
								then I often think with longing, Oh, would I could describe these conceptions.{" "}
							</p>
						</div>
						<div className="p-5 col-md-5 shadow-lg">
							<Login />
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
						<div className="col-md-4 p-4">
							<i className="d-block fa fa-circle fa-3x mb-2 text-muted" />
							<h4>
								<b>Primero</b>
							</h4>
							<p>
								{" "}
								A wonderful serenity has taken possession of my entire soul, like these sweet mornings
								of spring which I enjoy with my whole heart.{" "}
							</p>
						</div>
						<div className="col-md-4 col-6 p-4">
							<i className="d-block fa fa-stop-circle fa-3x mb-2 text-muted" />
							<h4>
								<b>Luego</b>
							</h4>
							<p>
								{" "}
								I am alone, and feel the charm of existence in this spot, which was created for the
								bliss of souls like mine. I am so happy, my dear friend.{" "}
							</p>
						</div>
						<div className="col-md-4 col-6 p-4">
							<i className="d-block fa fa-circle fa-3x mb-2 text-muted" />
							<h4>
								<b>Para finalizar</b>
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
		</>
	);
};
