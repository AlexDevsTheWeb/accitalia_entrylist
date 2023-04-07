import { InputAdornment, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

const Restrictor = () => {
	const dispatch = useDispatch();

	const handleChange = (e: any) => {
		// dispatch(setRestrictor(e.target.value));
	};
	return (
		<TextField
			label="Restrictor"
			id="outlined-start-adornment"
			sx={{ m: 0, width: "25ch" }}
			style={{ textAlign: "right", marginTop: "10px" }}
			type="number"
			onChange={(e: any) => handleChange(e)}
			InputProps={{
				endAdornment: <InputAdornment position="end">%</InputAdornment>,
			}}
		/>
	);
};

export default Restrictor;
