import { createSlice } from "@reduxjs/toolkit";

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

const entriesSlice = createSlice({
	name: "entries",
	initialState,
	reducers: {
		setBallast: (state, { payload }: any) => {
			state.ballastKg = payload;
		},
		setCustomCar: (state, { payload }: any) => {
			state.customCar = payload;
		},
		setDefaultGridPosition: (state, { payload }: any) => {
			state.defaultGridPosition = payload;
		},
		setForcedCarModel: (state, { payload }: any) => {
			state.forcedCarModel = payload;
		},
		setIsServerAdmin: (state) => {
			if (state.isServerAdmin === 1) {
				state.isServerAdmin = 0;
			} else {
				state.isServerAdmin = 1;
			}
		},
		setOverrideCarModelForCustomCar: (state) => {
			if (state.overrideCarModelForCustomCar === 1) {
				state.overrideCarModelForCustomCar = 0;
			} else {
				state.overrideCarModelForCustomCar = 1;
			}
		},
		setOverrideDriverInfo: (state) => {
			if (state.overrideDriverInfo === 1) {
				state.overrideDriverInfo = 0;
			} else {
				state.overrideDriverInfo = 1;
			}
		},
		setRaceNumber: (state, { payload }: any) => {
			state.raceNumber = payload;
		},
		setRestrictor: (state, { payload }: any) => {
			state.restrictor = payload;
		},
		setTeamName: (state, { payload }: any) => {
			state.teamName = payload;
		},
	},

	extraReducers: (builder) => {},
});

// export const {} = entriesSlice.actions;
export default entriesSlice.reducer;
