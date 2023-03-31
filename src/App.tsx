import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import Driver from "./components/driver.component";

function App() {
	const [drivers, setDrivers] = useState([]);
	const getDrivers = async () => {
		try {
			const response = await axios.get("data/patenti.json");

			setDrivers(response.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getDrivers();
	}, []);

	return (
		<div className="App">
			{drivers ? (
				Object.values(drivers).map((driver, index) => {
					return <Driver key={index} driver={driver} />;
				})
			) : (
				<div style={{ color: "white", backgroundColor: "black" }}>
					NOT AN ARRAY
				</div>
			)}
		</div>
	);
}

export default App;
