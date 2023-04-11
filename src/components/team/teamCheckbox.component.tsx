import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { handleChangeCheckBox } from "../../features/team/teamSlice";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2

const TeamCheckbox = () => {
	const dispatch = useDispatch();
	const handleCheckBox = (e: any) => {
		dispatch(
			handleChangeCheckBox({ name: e.target.name, value: e.target.value })
		);
	};
	return (
		<Wrapper>
			<Stack>
				<FormControlLabel
					label="Override car model for custom car?"
					name="overrideCarModelForCustomCar"
					control={<Checkbox onChange={(e: any) => handleCheckBox(e)} />}
				/>
				<FormControlLabel
					label="Override driver info?"
					name="overrideDriverInfo"
					checked
					control={<Checkbox onChange={(e: any) => handleCheckBox(e)} />}
				/>
				<FormControlLabel
					label="is Server Admin?"
					name="isServerAdmin"
					control={<Checkbox onChange={(e: any) => handleCheckBox(e)} />}
				/>
			</Stack>
		</Wrapper>
	);
};

const Wrapper = styled.section``;

export default TeamCheckbox;
