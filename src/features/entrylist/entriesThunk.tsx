import { resetDriver } from "../driver/driverSlice";
import { resetTeam } from "../team/teamSlice";

export const exportEntriesThunk = async (_: string, thunkAPI: any) => {
	const data = thunkAPI.getState().entrylist;
};

export const insertTeamsInEntriesThunk = async (_: string, thunkAPI: any) => {
	let teams = _;

	thunkAPI.dispatch(resetTeam());
	thunkAPI.dispatch(resetDriver());

	return teams;
};
