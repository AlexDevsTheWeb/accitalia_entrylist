import { configureStore } from "@reduxjs/toolkit";
import driversReducer from "../features/drivers/driversSlice";
// import userReducer from "../features/user/userSlice";
// import membershipReducer from "../features/membership/membershipSlice";
// import memberReducer from "../features/membership/memberSlice";
// import memberSectionOpenReducer from "../features/membership/memberSectionOpenSlice";
// import claimsReducer from "../features/claims/claimsSlice";
// import reportsReducer from "../features/reports/reportsSlice";
// import reportReducer from "../features/reports/reportSlice";

const rootReducer = {
	drivers: driversReducer,
	// user: userReducer,
	// members: membershipReducer,
	// member: memberReducer,
	// sectionOpen: memberSectionOpenReducer,
	// claims: claimsReducer,
	// reports: reportsReducer,
	// report: reportReducer,
};

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
