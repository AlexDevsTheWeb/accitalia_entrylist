import { useEffect } from "react";
import EntrylistContainer from "../components/entrylist/entrylistContainer.component";
import { getAllDrivers } from "../features/drivers/driversSlice";
import { useDispatch } from "react-redux";

const Entrylist = () => {
	const dispatch = useDispatch<any>();
	useEffect(() => {
		dispatch(getAllDrivers(""));

		// dispatch(loginUser(""));
	}, []);

	return <EntrylistContainer />;
};

export default Entrylist;
function dispatch(arg0: any) {
	throw new Error("Function not implemented.");
}
