const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentUserName: "Tu Nombre Completo",
			currentUserId: 2,
			currentMeetingId: null,
			meetings: []
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
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ data: data }));
			},

			onCreate: (url, data) => {
				console.log(data);
				fetch(url, {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
					// mode: "no-cors"
				})
					.then(resp => resp.json())
					.then(() => getActions().getFilteredMinutas("http://localhost:5000/api/meetings"))
					.catch(error=>console.log(error));
			},

			onUpdate: (data, id) => {
				fetch("#" + id, {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(() => getActions().getMinutas("#"));
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
