import styled from "styled-components";
import Patente from "./patente.component";
import DriverName from "./driverName.component";
import Rating from "./rating.component";
import { useState } from "react";

const DriversList = ({ driver }: any) => {
	const { nome, steamid, punti, patente, rating } = driver;

	const [userSteamID, setUserSteamID] = useState("");

	console.log(userSteamID);

	return (
		<DriverWrapper onClick={() => setUserSteamID(steamid)}>
			<Patente patente={patente} punti={punti}></Patente>
			<DriverName name={nome} steamid={steamid} />
			<Rating rating={rating} />
		</DriverWrapper>
	);
};

const DriverWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #ccc;
	margin: 10px;
	border-radius: 10px;
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
	width: 50%;

	&:hover {
		background-color: #cfcfcf;
		cursor: pointer;
	}
`;

export default DriversList;
