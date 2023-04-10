import Patente from "./patente.component";
import DriverName from "./driverName.component";
import Rating from "./rating.component";
import { useState } from "react";
import { DriverWrapper } from "./styled/driverList.styled";

const DriversList = ({ driver }: any) => {
	const { nome, steamid, punti, patente, rating } = driver;

	const [userSteamID, setUserSteamID] = useState("");

	return (
		<DriverWrapper onClick={() => setUserSteamID(steamid)}>
			<Patente patente={patente} punti={punti}></Patente>
			<DriverName name={nome} steamid={steamid} />
			<Rating rating={rating} />
		</DriverWrapper>
	);
};

export default DriversList;
