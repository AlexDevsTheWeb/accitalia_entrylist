export const insertDriversInTeamThunk = async (_: string, thunkAPI: any) => {
	let drivers = thunkAPI.getState().drivers.teamDrivers;

	console.log("drivers in thunk: ", drivers);
	return drivers;
};
