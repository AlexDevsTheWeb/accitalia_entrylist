import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { exportEntrylistThunk, insertAllEntriesThunk } from "./entrylistThunk";

const initialState = {
	entrylist: [],
	ready: false,
	numeroPiloti: 0,
	numeroAuto: 0,
};

export const exportEntryList = createAsyncThunk(
	"entrylist/exportEntryList",
	exportEntrylistThunk
);

export const insertAllEntries = createAsyncThunk(
	"entrylist/insertAllEntries",
	insertAllEntriesThunk
);

const entrylistSlice = createSlice({
	name: "entrylist",
	initialState,
	reducers: {
		setNumeroPiloti: (state) => {
			state.numeroPiloti = state.numeroPiloti + 1;
		},
		setNumeroAuto: (state) => {
			state.numeroAuto = state.numeroAuto + 1;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(exportEntryList.pending, (state) => {})
			.addCase(exportEntryList.fulfilled, (state, { payload }: any) => {})
			.addCase(exportEntryList.rejected, (state, { payload }: any) => {});
	},
});

export const { setNumeroAuto, setNumeroPiloti } = entrylistSlice.actions;
export default entrylistSlice.reducer;
