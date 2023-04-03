import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import { userLoginThunk } from "./loginThunk";

const initialState = {
	isLoading: false,
	userLoggedIn: false,
	username: "",
	password: "",
};

export const loginUser = createAsyncThunk("login/makeLogin", userLoginThunk);

const userSlice = createSlice({
	name: "login",
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
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, { payload }: any) => {
				state.isLoading = false;
				state.userLoggedIn = true;
				state.username = payload;
			})
			.addCase(loginUser.rejected, (state, { payload }: any) => {
				state.isLoading = false;
			});
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
} = userSlice.actions;
export default userSlice.reducer;
