import {
	FormControl,
	Input,
	SelectChangeEvent,
	TextField,
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
	const [driversNew, setDriversNew] = useState(drivers);

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
	};

	const handleSearch = (e: any) => {
		setSearchValue(e.target.value);
		const driversArray = Object.values(drivers);

		const matches = driversArray.filter((drivers: any) => {
			return drivers.nome.toLowerCase().includes(e.target.value.toLowerCase());
		});

		setDriversNew(matches);
	};

	return (
		<DriverWrapper>
			<Input value={searchValue} onChange={(e: any) => handleSearch(e)} />
			<Grid2 container spacing={2}>
				<Grid2 xs={8}>
					<FormControl fullWidth>
						{driversNew
							? Object.values(driversNew).map((driver: any) => {
									const { nome, steamid } = driver;
									return (
										<TextField
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

export default Driver;
