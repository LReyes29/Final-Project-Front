const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [
				{
					id: 1,
					fullname: "Luis Reyes",
					email: "luis@gmail.com",
					password: "123456",
					meeting_num: 1
				},
				{
					id: 2,
					fullname: "Joaquin Silva",
					email: "joaquin@gmail.com",
					password: "123456",
					meeting_num: 1
				}
			],
			meetings: [
				{
					id: 2,
					user_id: 1,
					admin: "Luis Reyes",
					create_date: "03-01-2020",
					meeting_date: "25-01-2020",
					meeting_hour: "11:30 am",
					project_name: "Proyecto2",
					title: "Reunion Operaciones",
					topics: [
						{
							id: 1,
							meeting_id: 1,
							title: "Tema1",
							priority: "",
							index: 1,
							matter: "Revisión area comercial",
							notes: "todo okey",
							tracking: "Roman",
							duration: 30
						},
						{
							id: 2,
							meeting_id: 1,
							title: "Tema2",
							priority: "",
							index: 2,
							matter: "Revisión área financiera",
							notes: "todo okey",
							tracking: "Julian",
							duration: 45
						}
					],
					guest_names: ["Roman", "Julian", "Veronica"],
					guest_emails: ["roman@gmail.com", "julian@gmail.com", "vero@gmail.com"],
					guest_roles: ["reemplazo", "coordinador", "oyente"],
					place: "Sala Reuniones",
					description: "Revisión carga de camiones",
					target: "Reajuste Sueldos"
				},
				{
					id: 1,
					user_id: 1,
					admin: "Luis Reyes",
					create_date: "01-02-2020",
					meeting_date: "15-03-2020",
					meeting_hour: "14:30 pm",
					project_name: "Proyecto1",
					title: "Reunion RRHH",
					topics: [
						{
							id: 1,
							meeting_id: 1,
							title: "Tema1",
							priority: "",
							index: 1,
							matter: "Revisión area comercial",
							notes: "todo okey",
							tracking: "Roman",
							duration: 25
						},
						{
							id: 2,
							meeting_id: 1,
							title: "Tema2",
							priority: "",
							index: 2,
							matter: "Revisión área financiera",
							notes: "todo okey",
							tracking: "Julian",
							duration: 15
						}
					],
					guest_names: ["Roman", "Julian", "Veronica"],
					guest_emails: ["roman@gmail.com", "julian@gmail.com", "vero@gmail.com"],
					guest_roles: ["traductor", "oyente", "oyente"],
					place: "Sala Reuniones",
					description: "Revisión sueldos empleados planta Quilicura",
					target: "Reajuste Sueldos"
				},
				{
					id: 2,
					user_id: 2,
					admin: "Joaquin Silva",
					create_date: "01-01-2020",
					meeting_date: "23-03-2020",
					meeting_hour: "12:30 pm",
					project_name: "Proyecto2",
					title: "Reunion Finanzas",
					topics: [
						{
							id: 1,
							meeting_id: 2,
							title: "Tema1",
							priority: "",
							index: 1,
							matter: "Balances 2019",
							notes: "todo okey",
							tracking: "Roman",
							duration: 35
						}
					],
					guest_names: ["Rodrigo", "Pablo", "Johanna"],
					guest_emails: ["rodrigo@gmail.com", "pablo@gmail.com", "johanna@gmail.com"],
					guest_roles: ["practicante", "relator", "resumidor"],
					place: "Sala Principal",
					description: "Revisión balance y EERR año 2019",
					target: "Enviar a consultoría externa la próxima semana"
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
