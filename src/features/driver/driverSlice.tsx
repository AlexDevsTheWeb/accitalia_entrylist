import { createSlice } from "@reduxjs/toolkit";
import { nameCleaner } from "../../utils/nameCleaner.utils";

const initialState = {
	driverCategory: 3,
	firstName: "",
	lastName: "",
	playerID: "",
	shortName: "",
};

const driverSlice = createSlice({
	name: "driver",
	initialState,
	reducers: {
		resetDriver: (state) => {
			state.driverCategory = 3;
			state.firstName = "";
			state.lastName = "";
			state.playerID = "";
			state.shortName = "";
		},
		setDriverInfo: (state, { payload }) => {
			let nomeIntero = payload.nome;
			nomeIntero = nameCleaner(nomeIntero);
			const nomeArray = nomeIntero.split(" ");
			if (nomeArray.length > 2) {
				state.firstName = nomeArray[0];
				state.lastName = nomeArray[1] + " " + nomeArray[2];
				state.shortName = nomeArray[2].substring(0, 3).toUpperCase();
			} else if (nomeArray.length == 2) {
				state.firstName = nomeArray[0];
				state.lastName = nomeArray[1];
				state.shortName = nomeArray[1].substring(0, 3).toUpperCase();
			} else {
				state.firstName = "";
				state.lastName = nomeArray[0];
				state.shortName = nomeArray[0].substring(0, 3).toUpperCase();
			}
			state.playerID = `S${payload.steamid}`;
		},
	},
	extraReducers: (builder) => {},
});

export const { setDriverInfo, resetDriver } = driverSlice.actions;

export default driverSlice.reducer;
