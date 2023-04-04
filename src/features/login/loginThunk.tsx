import axios from "axios";

export const userLoginThunk = async (_: string, thunkAPI: any) => {
	// let username = thunkAPI.getState().user.username;
	// let passwword = thunkAPI.getState().user.password;

	// let correctUser = process.env.REACT_APP_LOGIN_USER;
	// let correctPass = process.env.REACT_APP_LOGIN_PASS;

	console.log(
		process.env.REACT_APP_LOGIN_USER,
		process.env.REACT_APP_LOGIN_PASS
	);

	if (thunkAPI.getState().drivers.search) {
		let searchValue = thunkAPI.getState().drivers.search;

		// const driversArray = Object.values(drivers);

		// // const matches = driversArray.filter((searchValue: any) => {
		// // 	return driversArray.values() === searchValue.toLowerCase();
		// // });

		// const matches = driversArray.filter((drivers: any) => {
		// 	return drivers.nome.toLowerCase().includes(searchValue.toLowerCase());
		// });

		// return matches;
	}

	try {
		const response = await axios.get("data/patenti.json");
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
