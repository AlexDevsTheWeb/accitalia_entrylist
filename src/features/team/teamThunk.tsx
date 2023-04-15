export const insertDriversInTeamThunk = async (_: string, thunkAPI: any) => {
	let drivers = thunkAPI.getState().drivers.teamDrivers;

	return drivers;
};
