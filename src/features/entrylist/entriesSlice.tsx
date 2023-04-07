import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { insertTeamsInEntriesThunk } from "./entriesThunk";

const initialState = {
	entries: [],
	configVersion: 1,
	forceEntryList: 1,
};

export const insertTeamsInEntries = createAsyncThunk(
	"entries/insertTeam",
	insertTeamsInEntriesThunk
);

const entriesSlice = createSlice({
	name: "entries",
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(insertTeamsInEntries.pending, (state) => {})
			.addCase(insertTeamsInEntries.fulfilled, (state, { payload }: any) => {
				state.entries.push(payload as never);
			})
			.addCase(insertTeamsInEntries.rejected, (state, { payload }: any) => {});
	},
});

export const {} = entriesSlice.actions;
export default entriesSlice.reducer;
