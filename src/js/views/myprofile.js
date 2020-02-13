import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { Context } from "./../store/appContext";
import ProfileArea from "../component/ProfileArea";

export const MyProfile = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<ProfileArea />
					</div>
				</div>
			</div>
		</>
	);
};
