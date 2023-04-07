import { writeEntrylist } from "../../utils/jsonWriter.utils";

export const exportEntrylistThunk = async (_: string, thunkAPI: any) => {
	let data = thunkAPI.getState().entries;
	console.log(data);
	writeEntrylist(data);
};

export const insertAllEntriesThunk = async (_: string, thunkAPI: any) => {
	const data = thunkAPI.getState().entries;
	console.log("entra: ", data);
	let filtered;
	try {
		filtered = Object.values(data).filter(function (el: any) {
			return el != null;
		});
	} catch (error) {
		console.log(error);
	}
	console.log("esce: ", filtered);
	return filtered;
};
