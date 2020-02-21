const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			////
			currentUserId: "",
			currentUserName: "",
			////
			userMeetings: [],
			////
			currentMeetingId: "",
			currentMeeting: {}
		},
		actions: {
			putCurrentUser: (id, user) => {
				setStore({
					currentUserId: id,
					currentUserName: user
				});
			},

			getCurrentUser: string => {
				const store = getStore();

				if (string === "id") {
					let id = store.currentUserId;
					return id;
				}
				if (string === "name") {
					let name = store.currentUserName;
					return name;
				}
			},

			getMinutas: url => {
				fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ UserMeetings: data }));
			},

			getFilteredMinutas: url => {
				fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						const store = getStore();
						let filteredMeetings = data.filter(item => {
							return item.user_id == store.currentUserId;
						});
						setStore({
							userMeetings: filteredMeetings
						});
					});
			},

			saveMeetingId: id => {
				setStore({ currentMeetingId: id });
			},

			getCurrentMeeting: () => {
				const store = getStore();
				let cMeeting = store.userMeetings.filter(item => {
					return item.id == store.currentMeetingId;
				});
				setStore({
					currentMeeting: cMeeting[0]
				});
			},

			handleChangeMeeting: e => {
				const store = getStore();
				const cM = Object.assign({}, store.currentMeeting);
				cM[e.target.name] = e.target.value;
				setStore({ currentMeeting: cM });
			},

			saveTopicId: id => {
				setStore({ currentTopicId: id });
			},

			getCurrentTopic: () => {
				const store = getStore();
				let cTopic = store.currentMeeting.topics.filter(item => {
					return item.id == store.currentTopicId;
				});
				setStore({
					currentTopic: cTopic
				});
			},

			onCreateMeeting: data => {
				fetch("http://localhost:5000/api/meetings", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
					//mode: "no-cors"
				})
					.then(resp => resp.json())
					.then(() => getActions().getFilteredMinutas("http://localhost:5000/api/meetings"))
					.catch(error => console.log(error));
			},

			onUpdateMeeting: (data, id) => {
				data.done = "true";
				console.log(data);
				fetch("http://localhost:5000/api/meetings/" + id, {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(() => getActions().getFilteredMinutas("http://localhost:5000/api/meetings"));
			},

			onDeleteMeeting: id => {
				const store = getStore();
				let dM = store.userMeetings;
				const restOfThem = store.userMeetings.filter(item => {
					return item.id !== id;
				});
				dM = restOfThem;
				setStore({ userMeetings: dM });
				fetch("http://localhost:5000/api/meetings/" + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(() => getActions().getFilteredMinutas("http://localhost:5000/api/meetings"));
			},

			onCreateTopic: data => {
				const store = getStore();
				const newMeeting = Object.assign({}, store.currentMeeting);
				newMeeting.topics.push(data);
				console.log(newMeeting);
				fetch("http://localhost:5000/api/meetings/" + store.currentMeetingId, {
					method: "PUT",
					body: JSON.stringify(newMeeting),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(() => getActions().getFilteredMinutas("http://localhost:5000/api/meetings"));
			},

			onUpdateTopic: (data, id) => {
				const store = getStore();
				const updatedMeeting = Object.assign({}, store.currentMeeting);
				const index = store.currentMeeting.topics.findIndex((item, i) => {
					return item.id == id;
				});
				updatedMeeting.topics[index] = data;
				delete updatedMeeting.created_date;
				console.log(updatedMeeting);
				fetch("http://localhost:5000/api/meetings/" + store.currentMeetingId, {
					method: "PUT",
					body: JSON.stringify(updatedMeeting),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(() => getActions().getFilteredMinutas("http://localhost:5000/api/meetings"));
			},

			onDeleteTopic: id => {
				const store = getStore();
				const dT = Object.assign({}, store.currentMeeting);
				const restOfThem = store.currentMeeting.topics.filter(item => {
					return item.id !== id;
				});
				dT.topics = restOfThem;
				setStore({ currentMeeting: dT });

				fetch("http://localhost:5000/api/topics/" + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(() => getActions().getFilteredMinutas("http://localhost:5000/api/meetings"));
			},

			onSendInvitation: data => {
				fetch("http://localhost:5000/api/sendInvitation", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},

			onSendMeeting: data => {
				fetch("http://localhost:5000/api/sendMeeting", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},

			resetCUI: history => {
				setStore({ currentUserId: "" });
				setStore({ currentUserName: "" });
				history.push("/");
			}
		}
	};
};

export default getState;
