import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormLabel,
	Input,
	Radio,
	RadioGroup,
	SelectChangeEvent,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TeamDriver from "./teamDriver.component";
import { setNumeroPiloti } from "../../features/entrylist/entrylistSlice";
import { DriverWrapper } from "./styled/driver.styled";
import { insertDriver } from "../../features/drivers/driversSlice";
import { setDriverInfo } from "../../features/driver/driverSlice";
import Grid2 from "@mui/material/Unstable_Grid2";
import styled from "styled-components";

interface iDriver {
	driverCategory: number;
	firstName: string;
	lastName: string;
	playerID: string;
	shortName: string;
}
const Driver = () => {
	const dispatch = useDispatch<any>();
	const { drivers } = useSelector((store: any) => store.drivers);
	const [number, setNumber] = useState(1);
	const [searchValue, setSearchValue] = useState("");
	const [driversNew, setDriversNew] = useState<any>();
	const [driversToRemove, setDriversToRemove] = useState<any>([]);
	const [patenteValue, setPatenteValue] = useState("");

	const [teamDriver, setTeamDriver] = useState<any>([null]);
	const [stID, setStID] = useState("");
	const { singleDriver } = useSelector((store: any) => store.driver);

	const handleChange = (e: SelectChangeEvent) => {
		const driversArray = Object.values(drivers);
		const dA = e.target.value.split(" - ");
		const searchedID = parseInt(dA[1]);
		setStID(e.target.value);

		const matches: any = driversArray.filter((drivers: any) => {
			return drivers.steamid === searchedID;
		});
		setNumber(number + 1);
		setTeamDriver([
			...teamDriver,
			<TeamDriver key={searchedID} matches={matches[0]} number={number} />,
		]);

		dispatch(setNumeroPiloti());
		dispatch(setDriverInfo(matches[0]));
		dispatch(insertDriver(singleDriver));
		// setDriversToRemove([...driversToRemove, searchedID]);
		// const newMatches = driversArray.filter((drivers: any) => {
		// 	return drivers.steamid !== searchedID || drivers.patente === patenteValue;
		// });

		//setDriversNew(newMatches);
	};

	const handleSearch = (e: any) => {
		const searchText = e.target.value;
		setSearchValue(searchText);
		if (searchText) {
			const driversArray = Object.values(drivers);

			const matches = driversArray.filter((drivers: any) => {
				return drivers.nome.toLowerCase().includes(searchText.toLowerCase());
			});

			setDriversNew(matches);
		} else {
			setDriversNew(null);
		}
	};

	const handleRadioButton = (e: any) => {
		setPatenteValue(e.target.value);

		const driversArray = Object.values(drivers);
		if (e.target.value !== "All") {
			const matches = driversArray.filter((drivers: any) => {
				return drivers.patente
					.toLowerCase()
					.includes(e.target.value.toLowerCase());
			});
			setDriversNew(matches);
		} else {
			setDriversNew(driversArray);
		}
	};

	return (
		<DriverWrapper>
			<Grid2 container spacing={2}>
				<Grid2 xs={6}>
					<FormLabel id="demo-radio-buttons-group-label">Nome Pilota</FormLabel>
					<Input
						value={searchValue}
						fullWidth
						onChange={(e: any) => handleSearch(e)}
					/>
				</Grid2>
				{/* <Grid2 xs={6}>
					<FormLabel id="demo-radio-buttons-group-label">Patente</FormLabel>
					<RadioGroup
						row
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="All"
						name="radio-buttons-group"
					>
						<FormControlLabel
							value="All"
							control={<Radio />}
							label="All"
							onChange={(e: any) => handleRadioButton(e)}
						/>
						<FormControlLabel
							value="GT3"
							control={<Radio />}
							label="GT3"
							onChange={(e: any) => handleRadioButton(e)}
						/>
						<FormControlLabel
							value="GT4"
							control={<Radio />}
							label="GT4"
							onChange={(e: any) => handleRadioButton(e)}
						/>
						<FormControlLabel
							value="M2"
							control={<Radio />}
							label="M2"
							onChange={(e: any) => handleRadioButton(e)}
						/>
					</RadioGroup>
				</Grid2> */}
			</Grid2>

			<Grid2 container spacing={2}>
				<Grid2 xs={8}>
					<FormControl fullWidth>
						{driversNew
							? Object.values(driversNew).map((driver: any) => {
									const { nome, steamid } = driver;
									return (
										<SelectDriverTextField
											key={steamid}
											onClick={(e: any) => handleChange(e)}
											value={`${nome} - ${steamid}`}
										/>
									);
							  })
							: null}
					</FormControl>
				</Grid2>
				<Grid2 xs={4}>{teamDriver}</Grid2>
			</Grid2>
		</DriverWrapper>
	);
};

const SelectDriverTextField = styled(TextField)`
	cursor: pointer;
`;

export default Driver;
