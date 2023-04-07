export const exportEntriesThunk = async (_: string, thunkAPI: any) => {
	const data = thunkAPI.getState().entrylist;
};

export const insertTeamsInEntriesThunk = async (_: string, thunkAPI: any) => {
	console.log("team: ", thunkAPI.getState().team);
	let teams = thunkAPI.getState().team;

	return teams;
};
