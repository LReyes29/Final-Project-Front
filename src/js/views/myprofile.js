import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { Context } from "./../store/appContext";
import ProfileArea from "../component/ProfileArea";
import PropTypes from "prop-types";

export const MyProfile = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (store.currentUserId === "") props.history.push("/");
	}, []);

	return (
		<>
			<div className="container">
				<ProfileArea history={props.history} />
			</div>
		</>
	);
};

MyProfile.propTypes = {
	history: PropTypes.object
};
