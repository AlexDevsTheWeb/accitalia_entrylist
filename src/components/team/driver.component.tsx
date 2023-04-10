import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TeamDriver from "./teamDriver.component";
import { setNumeroPiloti } from "../../features/entrylist/entrylistSlice";
import { DriverWrapper } from "./styled/driver.styled";
import { insertDriver } from "../../features/drivers/driversSlice";
import { setDriverInfo } from "../../features/driver/driverSlice";

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

	const team = useSelector((store: any) => store.team);
	const [teamDriver, setTeamDriver] = useState<any>([null]);
	const [stID, setStID] = useState("");
	const { singleDriver } = useSelector((store: any) => store.driver);
	const handleChange = (e: SelectChangeEvent) => {
		const driversArray = Object.values(drivers);
		setStID(e.target.value);

		const matches: any = driversArray.filter((drivers: any) => {
			return drivers.steamid === e.target.value;
		});

		setTeamDriver([
			...teamDriver,
			<TeamDriver key={e.target.value} matches={matches[0]} />,
		]);

		dispatch(setNumeroPiloti());
		dispatch(setDriverInfo(matches[0]));
		dispatch(insertDriver(singleDriver));
	};

	return (
		<DriverWrapper>
			<FormControl fullWidth>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					label="Driver"
					value={stID}
					onChange={(e: any) => handleChange(e)}
				>
					{drivers
						? Object.values(drivers).map((driver: any) => {
								const { nome, steamid } = driver;
								return (
									<MenuItem value={steamid} key={steamid}>
										{nome} - {steamid}
									</MenuItem>
								);
						  })
						: null}
				</Select>
			</FormControl>
			<div>{teamDriver}</div>
		</DriverWrapper>
	);
};

export default Driver;
