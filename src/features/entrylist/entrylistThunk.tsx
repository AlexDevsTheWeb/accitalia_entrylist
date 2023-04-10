import { writeEntrylist } from "../../utils/jsonWriter.utils";

export const exportEntrylistThunk = async (_: string, thunkAPI: any) => {
	let data = thunkAPI.getState().entries;

	writeEntrylist(data);
};

export const insertAllEntriesThunk = async (_: string, thunkAPI: any) => {
	const data = thunkAPI.getState().entries;
	let filtered;
	try {
		filtered = Object.values(data).filter(function (el: any) {
			return el != null;
		});
	} catch (error) {}
	return filtered;
};
