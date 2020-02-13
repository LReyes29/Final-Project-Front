const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [
				{
					id: 1,
					fullname: "Luis Reyes",
					email: "luis@gmail.com",
					password: "123456",
					repeated_pass: "",
					auth: false
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
