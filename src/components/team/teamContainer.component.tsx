import styled from "styled-components";
import Ballast from "./ballast.component";
import CustomCar from "./customCar.component";
import RaceNumber from "./raceNumber.component";
import GridPosition from "./gridPosition.component";
import Restrictor from "./restrictor.component";
import TeamName from "./teamName.component";
import TeamCheckbox from "./teamCheckbox.component";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Button, Stack } from "@mui/material";
import Driver from "./driver.component";
import { AutoWrapper, Wrapper } from "./teamContainer.styled";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { insertDriversInTeam, resetTeam } from "../../features/team/teamSlice";
import { resetDriver } from "../../features/driver/driverSlice";

const TeamContainer = () => {
	const { numeroAuto } = useSelector((store: any) => store.entrylist);

	const { drivers } = useSelector((store: any) => store.team);
	const [auto, setAuto] = useState(0);
	const [x, setX] = useState(false);
	const [y, setY] = useState(0);
	const dispatch = useDispatch<any>();
	useEffect(() => {
		setAuto(numeroAuto);
	}, []);

	const handleClick = () => {
		dispatch(insertDriversInTeam(""));
		dispatch(resetDriver());
		dispatch(resetTeam());
	};

	return (
		<Wrapper>
			<AutoWrapper>Auto #{auto}</AutoWrapper>

			<Grid2 container spacing={2}>
				<Grid2 xs={6}>
					<Grid2 container spacing={2}>
						<Grid2 xs={6}>
							<Stack>
								<TeamName />
								<RaceNumber />
								<GridPosition />
							</Stack>
						</Grid2>
						<Grid2 xs={6}>
							<Stack>
								<CustomCar />
								<Ballast />
								<Restrictor />
							</Stack>
						</Grid2>
					</Grid2>
					<Stack>
						<TeamCheckbox />
					</Stack>
				</Grid2>
				<Grid2 xs={6}>
					<Driver />
				</Grid2>
			</Grid2>

			<Button variant="outlined" onClick={handleClick}>
				TEst
			</Button>
		</Wrapper>
	);
};

export default TeamContainer;
