import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "./../store/appContext";

export const Alert = props => {
	return (
		<>
			<div className={"alert alert-" + props.type + " alert-dismissible fade show text-center"} role="alert">
				<strong>{props.strong}</strong> {props.message}
				<button
					type="button"
					className="close"
					data-dismiss="alert"
					aria-label="Close"
					onClick={() => props.returnState()}>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		</>
	);
};

Alert.propTypes = {
	returnState: PropTypes.func,
	type: PropTypes.string,
	strong: PropTypes.string,
	message: PropTypes.string
};
