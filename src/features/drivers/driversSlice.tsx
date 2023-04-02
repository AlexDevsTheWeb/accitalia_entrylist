import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import { getAllDriversThunk } from "./driversThunk";

const initialFiltersState = {
	search: "",
};

const initialState = {
	isLoading: false,
	drivers: [],
	...initialFiltersState,
};

export const getAllDrivers = createAsyncThunk(
	"drivers/getAllDrivers",
	getAllDriversThunk
);

const driversSlice = createSlice({
	name: "allMemberships",
	initialState,
	reducers: {
		showLoading: (state) => {
			state.isLoading = true;
		},
		hideLoading: (state) => {
			state.isLoading = false;
		},
		handleChange: (state: any, { payload: { name, value } }: any) => {
			state[name] = value.replace(" ", "%20");
		},
		handleChangeStatus: (state: any, { payload: { name, value } }: any) => {
			state.showSearch = true;
			state.clearAll = false;
			state[name] = value;
		},
		setSearch: (state: any, { payload }: any) => {
			state.search = payload;
		},
		clearFilters: (state) => {
			// state.member_name = "";
			// state.member_id = "";
			// state.eyemed_id = "";
			// state.profile = "";
			// state.carrier = "";
			// state.client = "";
			// state.group = "";
			// state.open_id = "";
			// state.status = "";
			// state.clearAll = true;
			// state.page = 1;
			// state.totalPages = 1;
			// state.totalMembers = 0;
		},
		resetMembership: (state) => {
			// state.member_name = "";
			// state.member_id = "";
			// state.eyemed_id = "";
			// state.profile = "";
			// state.error = "";
			// state.carrier = "";
			// state.client = "";
			// state.group = "";
			// state.open_id = "";
			// state.status = "";
			// state.members = [];
			// state.carriers = [];
			// state.membershipIsLoading = false;
			// state.carriersIsLoading = false;
			// state.showSearch = false;
			// state.clearAll = false;
			// state.totalMembers = 0;
			// state.totalPages = 1;
			// state.page = 1;
		},
		resetError: (state) => {
			// state.error = "";
			// state.clearAll = false;
		},
		handleShowSearch: (state) => {
			// state.showSearch = !state.showSearch;
			// state.clearAll = false;
		},
		changePage: (state, { payload }) => {
			// state.page = payload;
		},
		clearAllMemberState: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllDrivers.pending, (state) => {
				state.isLoading = true;
				// state.error = "";
				// state.errorMessage = "";
			})
			.addCase(getAllDrivers.fulfilled, (state, { payload }: any) => {
				state.isLoading = false;
				// state.members = payload.members;
				// state.error = "";
				// state.errorMessage = "";
				// state.totalPages = payload.totalPages;
				// state.totalMembers = payload.totalMembers;
				state.drivers = payload;
			})
			.addCase(getAllDrivers.rejected, (state, { payload }: any) => {
				state.isLoading = false;
				// state.error = payload.status;
				// state.errorMessage = payload.data.errorMessage;
				// toast.error(payload.data.errorMessage);
			});
		// .addCase(getAllCarriers.pending, (state) => {
		// 	state.carriersIsLoading = true;
		// 	state.error = "";
		// 	state.errorMessage = "";
		// })
		// .addCase(getAllCarriers.fulfilled, (state, { payload }: any) => {
		// 	state.carriersIsLoading = false;
		// 	state.carriers = payload;
		// 	state.error = "";
		// 	state.errorMessage = "";
		// })
		// .addCase(getAllCarriers.rejected, (state, { payload }: any) => {
		// 	state.carriersIsLoading = false;
		// 	state.error = payload.status;
		// 	state.errorMessage = payload.data.errorMessage;
		// 	toast.error(payload.data.errorMessage);
		// });
	},
});

export const {
	setSearch,
	showLoading,
	hideLoading,
	handleChange,
	handleChangeStatus,
	clearFilters,
	handleShowSearch,
	resetMembership,
	resetError,
	clearAllMemberState,
	changePage,
} = driversSlice.actions;
export default driversSlice.reducer;
