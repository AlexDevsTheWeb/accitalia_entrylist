import CustomCar from "./customCar.component";
import TeamCheckbox from "./teamCheckbox.component";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import Driver from "./driver.component";
import { AutoWrapper, Wrapper } from "./styled/teamContainer.styled";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
	handleChangeTeamInfo,
	insertDriversInTeam,
} from "../../features/team/teamSlice";
import { resetTeamDriver } from "../../features/drivers/driversSlice";

const TeamContainer = ({ handleCloseDialog }: any) => {
	const { numeroAuto } = useSelector((store: any) => store.entrylist);
	const [auto, setAuto] = useState(1);
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
		dispatch(insertDriversInTeam(""));
		dispatch(resetTeamDriver());
		handleCloseDialog();
	};

	return (
		<Wrapper>
			<AutoWrapper>TEAM #{auto}</AutoWrapper>

			<Grid2 container spacing={2}>
				<Grid2 xs={10}>
					<Grid2 container spacing={1}>
						<Grid2 xs={3}>
							<Stack>
								<TextField
									label="Team Name"
									name="teamName"
									id="outlined-start-adornment"
									sx={{ m: 0, width: "20ch" }}
									style={{ marginTop: "10px" }}
									size="small"
									type="text"
									onChange={(e: any) => handleChange(e)}
								/>
								<TextField
									label="Race Number"
									name="raceNumber"
									id="outlined-start-adornment"
									sx={{ m: 0, width: "20ch" }}
									style={{ marginTop: "10px" }}
									size="small"
									type="number"
									onChange={(e: any) => handleChange(e)}
								/>
								<TextField
									label="Grid Position"
									name="defaultGridPosition"
									id="outlined-start-adornment"
									sx={{ m: 0, width: "20ch" }}
									style={{ marginTop: "10px" }}
									size="small"
									type="number"
									onChange={(e: any) => handleChange(e)}
								/>
							</Stack>
						</Grid2>
						<Grid2 xs={4}>
							<Stack>
								<CustomCar />
								<TextField
									label="Zavorra"
									name="ballastKg"
									id="outlined-start-adornment"
									sx={{ m: 0, width: "20ch" }}
									style={{ marginTop: "10px" }}
									size="small"
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
									sx={{ m: 0, width: "20ch" }}
									style={{ marginTop: "10px" }}
									size="small"
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
						<Grid2 xs={5}>
							<TeamCheckbox />
						</Grid2>
					</Grid2>
				</Grid2>

				<Grid2 xs={2}>
					<div
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "flex-end",
							marginTop: "10px",
							paddingRight: "20px",
						}}
					>
						<Button variant="contained" onClick={handleClick}>
							SALVA
						</Button>
					</div>
				</Grid2>
			</Grid2>
			<Grid2 container spacing={2}>
				<Grid2 xs={12}>
					<Driver />
				</Grid2>
			</Grid2>
		</Wrapper>
	);
};

export default TeamContainer;
