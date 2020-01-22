import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//Views
import { Home } from "./views/landing";
import { Principal } from "./views/principal";
import { NewMeeting } from "./views/newmeeting";
import { MyProfile } from "./views/myprofile";
import { Memo } from "./views/memo";
import { Payment } from "./views/payment";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/newmeeting/:id" component={NewMeeting} />
						<Route exact path="/newmeeting" component={NewMeeting} />
						<Route exact path="/memo/:id" component={Memo} />
						<Route exact path="/memo" component={Memo} />
						<Route exact path="/payment" component={Payment} />
						<Route exact path="/myprofile" component={MyProfile} />
						<Route exact path="/principal" component={Principal} />
						<Route exact path="/" component={Home} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
