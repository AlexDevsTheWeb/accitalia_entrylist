import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
	getAllDriversThunk,
	insertDriverIntoDriversListThunk,
} from "./driversThunk";

const initialFiltersState = {
	search: "",
};

const initialState = {
	isLoading: false,
	driversReady: false,
	drivers: [],
	teamDrivers: [],
	...initialFiltersState,
};

export const getAllDrivers = createAsyncThunk(
	"drivers/getAllDrivers",
	getAllDriversThunk
);

export const insertDriver = createAsyncThunk(
	"drivers/insertDriver",
	insertDriverIntoDriversListThunk
);

const driversSlice = createSlice({
	name: "drivers",
	initialState,
	reducers: {
		setSearch: (state: any, { payload }: any) => {
			return { ...state, search: payload };
		},
		setReady: (state) => {
			return { ...state, driversReady: !state.driversReady };
		},
		resetTeamDriver: (state) => {
			return { ...state, teamDrivers: [] };
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllDrivers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllDrivers.fulfilled, (state, { payload }: any) => {
				state.isLoading = false;
				state.drivers = payload;
			})
			.addCase(getAllDrivers.rejected, (state, { payload }: any) => {
				state.isLoading = false;
			})
			.addCase(insertDriver.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(insertDriver.fulfilled, (state, { payload }: any) => {
				state.teamDrivers.push(payload as never);
				state.driversReady = true;
			})
			.addCase(insertDriver.rejected, (state, { payload }: any) => {
				state.isLoading = false;
			});
	},
});

export const { setSearch, setReady, resetTeamDriver } = driversSlice.actions;
export default driversSlice.reducer;
