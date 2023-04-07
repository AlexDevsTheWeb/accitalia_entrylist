import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";

const GridPosition = () => {
	const dispatch = useDispatch();

	const handleChange = (e: any) => {
		// dispatch(setDefaultGridPosition(e.target.value));
	};
	return (
		<TextField
			label="Grid Position"
			id="outlined-start-adornment"
			sx={{ m: 0, width: "25ch" }}
			style={{ textAlign: "right", marginTop: "10px" }}
			type="number"
			onChange={(e: any) => handleChange(e)}
		/>
	);
};

export default GridPosition;
