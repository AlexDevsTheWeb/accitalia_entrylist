import styled from "styled-components";
import WarningIcon from "@mui/icons-material/Warning";
import { red } from "@mui/material/colors";

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

const DriverNameWrapper = styled.div`
	width: 100%;
	display: flex;
	padding: 0px 20px;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: flex-start;
	justify-content: center;
	align-items: flex-start;
`;

const DriverNameText = styled.p`
	font-size: 20px;
	line-height: 120%;
	color: #666;
	font-weight: bold;
	margin: 0;
`;

const DriverSteamID = styled.p`
	font-size: 16px;
	line-height: 120%;
	color: #666;
	margin: 0;
	width: 100%;
`;

export default DriverName;
