import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { insertDriversInTeamThunk } from "./teamThunk";

const initialState = {
	ballastKg: 0,
	customCar: "",
	defaultGridPosition: -1,
	drivers: [],
	forcedCarModel: -1,
	isServerAdmin: 0,
	overrideCarModelForCustomCar: 0,
	overrideDriverInfo: 1,
	raceNumber: -1,
	restrictor: 0,
	teamName: null,
};

export const insertDriversInTeam = createAsyncThunk(
	"team/insertTeam",
	insertDriversInTeamThunk
);

const teamSlice = createSlice({
	name: "team",
	initialState,
	reducers: {
		resetTeam: (state) => {
			state.ballastKg = 0;
			state.customCar = "";
			state.defaultGridPosition = -1;
			state.drivers = [];
			state.forcedCarModel = -1;
			state.isServerAdmin = 0;
			state.overrideCarModelForCustomCar = 0;
			state.overrideDriverInfo = 1;
			state.raceNumber = -1;
			state.restrictor = 0;
			state.teamName = null;
		},

		handleChangeTeamInfo: (state: any, { payload: { name, value } }) => {
			state[name] = value;
		},
		handleChangeCheckBox: (state: any, { payload: { name, value } }) => {
			let oldValue = state[name];
			if (oldValue === 0) {
				state[name] = 1;
			} else {
				state[name] = 0;
			}
		},
		setForcedCarModel: (state: any, { payload }: any) => {
			state.forcedCarModel = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(insertDriversInTeam.pending, (state) => {})
			.addCase(insertDriversInTeam.fulfilled, (state, { payload }: any) => {
				state.drivers.push(payload as never);
			})
			.addCase(insertDriversInTeam.rejected, (state, { payload }: any) => {});
	},
});

export const {
	resetTeam,
	handleChangeTeamInfo,
	setForcedCarModel,
	handleChangeCheckBox,
} = teamSlice.actions;
export default teamSlice.reducer;
