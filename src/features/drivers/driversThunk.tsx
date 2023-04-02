import axios from "axios";

export const getAllDriversThunk = async (_: string, thunkAPI: any) => {
	let drivers = thunkAPI.getState().drivers.drivers;

	if (thunkAPI.getState().drivers.search) {
		let searchValue = thunkAPI.getState().drivers.search;

		const driversArray = Object.values(drivers);

		// const matches = driversArray.filter((searchValue: any) => {
		// 	return driversArray.values() === searchValue.toLowerCase();
		// });

		const matches = driversArray.filter((drivers: any) => {
			return drivers.nome.toLowerCase().includes(searchValue.toLowerCase());
		});

		return matches;
	}

	try {
		const response = await axios.get("data/patenti.json");
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
