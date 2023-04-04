import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
	exportEntrylistThunk,
	addDriversToEntrylistThunk,
} from "./entrylistThunk";
// import { toast } from "react-toastify";
// import { userLoginThunk } from "./loginThunk";

const initialState = {
	// isLoading: false,
	// userLoggedIn: false,
	// username: "",
	// password: "",

	entries: [],
	configVersion: 1,
	forceEntryList: 1,

	ready: false,
};

// export const loginUser = createAsyncThunk("login/makeLogin", userLoginThunk);

export const exportEntryList = createAsyncThunk(
	"entrylist/exportEntryList",
	exportEntrylistThunk
);

export const addDriverEntriesToEntrylist = createAsyncThunk(
	"entrylist/addDriversToEntrylist",
	addDriversToEntrylistThunk
);

const entrylistSlice = createSlice({
	name: "entrylist",
	initialState,
	reducers: {
		setForceEntryList: (state) => {
			if (state.forceEntryList === 1) {
				state.forceEntryList = 0;
			} else {
				state.forceEntryList = 1;
			}
		},
		setEntries: (state, { payload }: any) => {
			state.entries = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(exportEntryList.pending, (state) => {
				// state.isLoading = true;
			})
			.addCase(exportEntryList.fulfilled, (state, { payload }: any) => {
				// state.isLoading = false;
				// state.userLoggedIn = true;
				// state.username = payload;
			})
			.addCase(exportEntryList.rejected, (state, { payload }: any) => {
				// state.isLoading = false;
			})
			.addCase(addDriverEntriesToEntrylist.pending, (state) => {
				// state.isLoading = true;
			})
			.addCase(
				addDriverEntriesToEntrylist.fulfilled,
				(state, { payload }: any) => {
					state.entries.push(payload as never);

					state.ready = true;
				}
			)
			.addCase(
				addDriverEntriesToEntrylist.rejected,
				(state, { payload }: any) => {
					// state.isLoading = false;
				}
			);
	},
});

export const { setForceEntryList } = entrylistSlice.actions;
export default entrylistSlice.reducer;
