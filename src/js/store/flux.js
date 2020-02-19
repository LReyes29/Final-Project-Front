const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			////
			currentUserId: 1,
			currentUserName: "Luis Reyes",
			////
			userMeetings: [],
			////
			currentMeetingId: "",
			currentMeeting: {}
			////
			//currentTopicId: "",
			//currentTopic: {}
		},

		actions: {
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


			onCreate: (url, data) => {
				console.log(data);
				fetch(url, {

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
				const cM = store.currentMeeting;
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
				fetch("http://localhost:5000/api/meetings/", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
					// mode: "no-cors"
				})
					.then(resp => resp.json())
					.then(() => getActions().getFilteredMinutas("http://localhost:5000/api/meetings"));
			},

			onUpdateMeeting: (data, id) => {
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
				const dM = store.userMeetings;
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
				const newMeeting = store.currentMeeting;
				newMeeting.topics.push(data);
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
				const updatedMeeting = store.currentMeeting;
				const index = store.currentMeeting.topics.findIndex((item, i) => {
					return item.id == id;
				});
				updatedMeeting.topics[index] = data;
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
				const dT = store.currentMeeting;
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
			}
		}
	};
};

export default getState;
