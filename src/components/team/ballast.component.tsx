import { InputAdornment, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setBallastKg } from "../../features/team/teamSlice";

const Ballast = () => {
	const dispatch = useDispatch();

	const handleChange = (e: any) => {
		dispatch(setBallastKg(e.target.value));
	};
	return (
		<TextField
			label="Ballast / Zavorra"
			id="outlined-start-adornment"
			sx={{ m: 0, width: "25ch" }}
			style={{ textAlign: "right", marginTop: "10px" }}
			type="number"
			onChange={(e: any) => handleChange(e)}
			InputProps={{
				endAdornment: <InputAdornment position="end">kg</InputAdornment>,
			}}
		/>
	);
};

export default Ballast;
