const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentUserName: "Luis Reyes",
			currentUserId: 1,
			currentMeetingId: null,
			meetings: []
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
					.then(data => setStore({ meetings: data }));
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
							meetings: filteredMeetings
						});
					});
			},

			onCreateMeeting: data => {
				fetch("#", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(() => getFilteredMinutas("#"));
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
				fetch("http://localhost:5000/api/meetings/" + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(() => getActions().getFilteredMinutas("http://localhost:5000/api/meetings"));
			},

			onUpdateTopic: (data, id) => {
				fetch("http://localhost:5000/api/topics/" + id, {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(() => getActions().getFilteredMinutas("http://localhost:5000/api/meetings"));
			},
			onDeleteTopic: id => {
				fetch("http://localhost:5000/api/topics/" + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(() => getActions().getFilteredMinutas("http://localhost:5000/api/meetings"));
			}

			// getMeetingId: id => {
			// 	// let meet = document.getElementById(e.target.id);
			// 	// let id = meet.id;
			// 	setStore({ currentMeetingId: id });
			// 	console.log(getStore().currentMeetingId);
			// },

			// handleChange: e => {
			// 	setStore({ [e.target.name]: e.target.value });
			// }

			// onSend: id => {
			// }
		}
	};
};

export default getState;
