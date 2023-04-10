import styled from "styled-components";
import WarningIcon from "@mui/icons-material/Warning";
import { red } from "@mui/material/colors";
import {
	DriverNameText,
	DriverNameWrapper,
	DriverSteamID,
} from "./styled/driverName.styled";

const DriverName = ({ name, steamid }: any) => {
	return (
		<DriverNameWrapper>
			<div style={{ height: "auto" }}>
				<DriverNameText>{name}</DriverNameText>
			</div>
			<div style={{ height: "auto", display: "flex" }}>
				<DriverSteamID>Steam ID: {steamid}</DriverSteamID>
				{steamid === "non ancora inserito" ? (
					<WarningIcon sx={{ color: red[700], marginLeft: "10px;" }} />
				) : null}
			</div>
		</DriverNameWrapper>
	);
};

export default DriverName;
