const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			current_user_id: 1,
			meetings: [{
				create_date: "4-02-2020",
				description: "descripcion4",
				guests: [],
				meeting_date: "4-01-2020",
				meeting_hour: "4:00 pm",
				place: "place4",
				project_name: "proyecto4",
				target: "target4",
				title: "title4",
				topics: [
					{
						id: 1,
						care: "care77",
						duration: "duration5",
						notes: "notes5",
						priority: "priority5",
						title: "title5",
						tracking: "tracking5",
						meeting_id: 1
					},
					{
						id: 2,
						care: "care88",
						duration: "duration6",
						notes: "notes6",
						priority: "priority6",
						title: "title6",
						tracking: "tracking6",
						meeting_id: 1
					}
				],
				user_id: 1
			}]
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
					.then(data => setStore({ data }));
			},

			onCreate: data => {
				fetch("#", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(() => getActions().getMinutas("#"));
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

			onDelete: id => {
				fetch("#" + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(() => getActions().getMinutas("#"));
			},

			handleChange: e => {
				setStore({ [e.target.name]: e.target.value });
			}

			// onSend: id => {
			// }
		}
	};
};

export default getState;
