import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import TeamDriver from "./teamDriver.component";
import { resetDriver, setDriverInfo } from "../../features/driver/driverSlice";
import { insertDriver } from "../../features/drivers/driversSlice";
import { setNumeroPiloti } from "../../features/entrylist/entrylistSlice";

const Driver = () => {
	const { drivers, teamDrivers } = useSelector((store: any) => store.drivers);

	const [teamDriver, setTeamDriver] = useState<any>([null]);

	const dispatch = useDispatch<any>();
	const [name, setName] = useState("");
	const [stID, setStID] = useState("");

	const handleChange = (e: SelectChangeEvent) => {
		const driversArray = Object.values(drivers);
		setStID(e.target.value);

		const matches = driversArray.filter((drivers: any) => {
			return drivers.steamid === e.target.value;
		});
		setTeamDriver([
			...teamDriver,
			<TeamDriver key={e.target.value} matches={matches[0]} />,
		]);

		dispatch(setNumeroPiloti());
		dispatch(setDriverInfo(matches[0]));
		dispatch(insertDriver(""));
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
					name={name}
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

const DriverWrapper = styled.section``;
export default Driver;
