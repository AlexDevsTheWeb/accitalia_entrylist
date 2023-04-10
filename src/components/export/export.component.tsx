import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { addDrivers } from "../../features/entrylist/entriesSlice";
import { useEffect } from "react";
import { exportEntryList } from "../../features/entrylist/entrylistSlice";

const Export = () => {
	const { ready } = useSelector((store: any) => store.entrylist);

	const { entrylistDrivers } = useSelector((store: any) => store.drivers);
	const { drivers } = useSelector((store: any) => store.entries);

	const dispatch = useDispatch<any>();
	const handleDrivers = () => {
		// dispatch(addDrivers(""));
	};

	return (
		<Button variant="contained" onClick={handleDrivers}>
			ESPORTA
		</Button>
	);
};

export default Export;
