const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			minutas: [
				{
					id: "1",
					date: "04-02-2020",
					title: "test1",
					description: "test1_description",
					duration: "1",
					topics_num: "1"
				},
				{
					id: "2",
					date: "05-02-2020",
					title: "test2",
					description: "test2_description",
					duration: "2",
					topics_num: "2"
				},
				{
					id: "3",
					date: "06-02-2020",
					title: "test3",
					description: "test3_description",
					duration: "3",
					topics_num: "3"
				},
				{
					id: "4",
					date: "07-02-2020",
					title: "test4",
					description: "test4_description",
					duration: "4",
					topics_num: "4"
				},
				{
					id: "5",
					date: "08-02-2020",
					title: "test3",
					description: "test3_description",
					duration: "3",
					topics_num: "3"
				},
				{
					id: "6",
					date: "09-02-2020",
					title: "test4",
					description: "test4_description",
					duration: "4",
					topics_num: "4"
				}
			]
		},
		actions: {
			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// },

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
					.catch(error => console.log(error));
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
