import { writeEntrylist } from "../../utils/jsonWriter.utils";

export const exportEntrylistThunk = async (_: string, thunkAPI: any) => {
	const data = thunkAPI.getState().entrylist;
	writeEntrylist(data);
};

export const addDriversToEntrylistThunk = async (_: string, thunkAPI: any) => {
	const entries = thunkAPI.getState().entries;

	return entries;
};
