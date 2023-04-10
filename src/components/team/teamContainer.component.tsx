import CustomCar from "./customCar.component";
import TeamCheckbox from "./teamCheckbox.component";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import Driver from "./driver.component";
import { AutoWrapper, Wrapper } from "./teamContainer.styled";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
	handleChangeTeamInfo,
	insertDriversInTeam,
	resetTeam,
} from "../../features/team/teamSlice";
import {
	insertDriver,
	resetTeamDriver,
	setReady,
} from "../../features/drivers/driversSlice";
import { insertTeamsInEntries } from "../../features/entrylist/entriesSlice";

const TeamContainer = () => {
	const { numeroAuto } = useSelector((store: any) => store.entrylist);
	const { teamDrivers, driversReady } = useSelector(
		(store: any) => store.drivers
	);
	const { singleDriver } = useSelector((store: any) => store.driver);
	const team = useSelector((store: any) => store.team);
	const [auto, setAuto] = useState(0);
	const dispatch = useDispatch<any>();

	useEffect(() => {
		setAuto(numeroAuto);
	}, []);

	const handleChange = (e: any) => {
		dispatch(
			handleChangeTeamInfo({ name: e.target.name, value: e.target.value })
		);
	};

	const handleClick = () => {
		//
		dispatch(insertTeamsInEntries(team));
	};

	useEffect(() => {
		if (driversReady) {
			dispatch(insertDriversInTeam(""));
			dispatch(setReady());
			dispatch(resetTeamDriver());
		}
	}, [driversReady]);

	return (
		<Wrapper>
			<AutoWrapper>Auto #{auto}</AutoWrapper>

			<Grid2 container spacing={2}>
				<Grid2 xs={6}>
					<Grid2 container spacing={2}>
						<Grid2 xs={6}>
							<Stack>
								<TextField
									label="Team Name"
									name="teamName"
									id="outlined-start-adornment"
									sx={{ m: 0, width: "25ch" }}
									style={{ textAlign: "right", marginTop: "10px" }}
									type="text"
									onChange={(e: any) => handleChange(e)}
								/>
								<TextField
									label="Race Number"
									name="raceNumber"
									id="outlined-start-adornment"
									sx={{ m: 0, width: "25ch" }}
									style={{ textAlign: "right", marginTop: "10px" }}
									type="number"
									onChange={(e: any) => handleChange(e)}
								/>
								<TextField
									label="Grid Position"
									name="defaultGridPosition"
									id="outlined-start-adornment"
									sx={{ m: 0, width: "25ch" }}
									style={{ textAlign: "right", marginTop: "10px" }}
									type="number"
									onChange={(e: any) => handleChange(e)}
								/>
							</Stack>
						</Grid2>
						<Grid2 xs={6}>
							<Stack>
								<CustomCar />
								<TextField
									label="Ballast / Zavorra"
									name="ballastKg"
									id="outlined-start-adornment"
									sx={{ m: 0, width: "25ch" }}
									style={{ textAlign: "right", marginTop: "10px" }}
									type="number"
									onChange={(e: any) => handleChange(e)}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">kg</InputAdornment>
										),
									}}
								/>
								<TextField
									label="Restrictor"
									name="restrictor"
									id="outlined-start-adornment"
									sx={{ m: 0, width: "25ch" }}
									style={{ textAlign: "right", marginTop: "10px" }}
									type="number"
									onChange={(e: any) => handleChange(e)}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">%</InputAdornment>
										),
									}}
								/>
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

			<div
				style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
			>
				<Button variant="contained" onClick={handleClick}>
					SAVE
				</Button>
			</div>
		</Wrapper>
	);
};

export default TeamContainer;
