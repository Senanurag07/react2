let ani = [
	{
		name: "anurag",
		age: 22,
		email: "senauqag@mail.com",
	},
	{
		name: "anura",
		age: 22,
		email: "senauqag@mail.com",
	},
	{
		name: "anuur",
		age: 22,
		email: "senauqag@mail.com",
	},
];

let anuu = ani.map(function (item, index) {
	return (
		<div key={index}>
			<h1>name : {item.name}</h1>
			<h2>age : {item.age}</h2>
			<p>email : {item.email}</p>
		</div>
	);
});

const App = () => {
	return <div>{anuu}</div>;
};

export default App;
