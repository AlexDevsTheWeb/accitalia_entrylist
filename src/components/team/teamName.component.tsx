import { InputAdornment, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

const TeamName = () => {
	const dispatch = useDispatch();

	const handleChange = (e: any) => {
		// dispatch(setTeamName(e.target.value));
	};
	return (
		<TextField
			label="Team Name"
			id="outlined-start-adornment"
			sx={{ m: 0, width: "25ch" }}
			style={{ textAlign: "right", marginTop: "10px" }}
			type="text"
			onChange={(e: any) => handleChange(e)}
		/>
	);
};

export default TeamName;
