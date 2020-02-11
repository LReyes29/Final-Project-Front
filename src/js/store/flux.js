const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [
				{
					id: 1,
					fullname: "Luis Reyes",
					email: "luis@gmail.com",
					password: "123456"
				}
			],
			meetings: [
				{
					id: 1,
					user_id: 1,
					admin: "Luis Reyes",
					create_date: "10-02-2020",
					meeting_hour: "16:00 pm",
					project_name: "tests front-back",
					title: "test 1",
					place: "Sala 4geeks",
					description: "2 weeks to go",
					target: "terminar final project"
				}
			],
			topics: [
				{
					id: 1,
					meeting_id: 1,
					title: "title 1",
					priority: "Alta",
					notes: "notes 1",
					care: "care 1",
					tracking: "tracking",
					duration: 10
				}
			],
			guests: [
				{
					id: 1,
					meeting_id: 1,
					fullname: "Camilo Sánchez",
					email: "camilo@gmail.com",
					rol: "espectador"
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
			}
			// onSend: id => {
			// }
		}
	};
};

export default getState;
