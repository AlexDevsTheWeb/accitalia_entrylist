import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const TeamCheckbox = () => {
	const dispatch = useDispatch();
	const handleOverrideCarModel = () => {
		// dispatch(setOverrideCarModelForCustomCar());
	};
	const handleOverrideDriverInfo = () => {
		// dispatch(setOverrideDriverInfo());
	};
	const handleIsServerAdmin = () => {
		// dispatch(setIsServerAdmin());
	};
	return (
		<Wrapper>
			<Stack>
				<FormControlLabel
					label="Override car model for custom car?"
					control={<Checkbox onChange={handleOverrideCarModel} />}
				/>
				<FormControlLabel
					label="Override driver info?"
					control={<Checkbox onChange={handleOverrideDriverInfo} />}
				/>
				<FormControlLabel
					label="is Server Admin?"
					control={<Checkbox onChange={handleIsServerAdmin} />}
				/>
			</Stack>
		</Wrapper>
	);
};

const Wrapper = styled.section``;

export default TeamCheckbox;
