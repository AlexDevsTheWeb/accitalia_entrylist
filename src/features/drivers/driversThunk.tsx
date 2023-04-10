import axios from "axios";

export const getAllDriversThunk = async (_: string, thunkAPI: any) => {
	let drivers = thunkAPI.getState().drivers.drivers;

	if (thunkAPI.getState().drivers.search) {
		let searchValue = thunkAPI.getState().drivers.search;

		const driversArray = Object.values(drivers);

		const matches = driversArray.filter((drivers: any) => {
			return drivers.nome.toLowerCase().includes(searchValue.toLowerCase());
		});

		return matches;
	}

	try {
		const response = await axios.get("data/patenti.json");
		return response.data;
	} catch (error) {}
};

export const insertDriverIntoDriversListThunk = async (
	_: string,
	thunkAPI: any
) => {
	let driver = thunkAPI.getState().driver;
	return driver;
};
