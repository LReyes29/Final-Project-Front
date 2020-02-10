import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { Context } from "./../store/appContext";

export const MyProfile = () => {
	return (
		<>
			<div className="container">
				<div className=".col-xs-4 .col-md-offset-2">
					<div className="panel panel-default panel-info Profile">
						<div className="panel-heading">
							<h1>My Profile</h1>
						</div>
						<div className="panel-body">
							<div className="form-horizontal">
								<form>
									<div className="form-group">
										<label className="col-sm-2 control-label">Nombre y apellido</label>
										<div className="col-sm-4">
											<input
												className="form-control"
												type="text"
												name="firstName"
												placeholder="Nombre y apellido"
											/>
										</div>
									</div>

									<div className="form-group">
										<label className="col-sm-2 control-label">Email</label>
										<div className="col-sm-4">
											<input
												className="form-control"
												type="text"
												name="email"
												placeholder="Email"
											/>
										</div>
									</div>
									<div className="form-group">
										<label className="col-sm-2 control-label">Phone</label>
										<div className="col-sm-4">
											<input
												className="form-control"
												type="number"
												name="phone"
												placeholder="+xx x xxxx xxxx"
											/>
										</div>
									</div>
									<div className="form-group">
										<div className="col-sm-offset-2 col-sm-10">
											<button className="btn btn-primary"> Update </button>
										</div>
									</div>
								</form>
							</div>
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
				src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
				integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
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
