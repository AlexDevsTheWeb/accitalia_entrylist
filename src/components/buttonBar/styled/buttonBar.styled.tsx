import styled from "styled-components";
import HouseIcon from "@mui/icons-material/House";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";

export const ButtonBarWrapper = styled.section`
	height: auto;
	border-bottom: 1px solid #ccc;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: flex-start;
	align-items: center;
	padding: 10px 20px;
	gap: 20px;
`;

export const HomeIconStyled = styled(HouseIcon)`
	color: #000;
	transition: color 0.6s ease-in-out;
	&:hover {
		color: #444;
	}
`;

export const RoomPreferencesIconStyled = styled(RoomPreferencesIcon)`
	color: #000;
	transition: color 0.6s ease-in-out;
	&:hover {
		color: #444;
	}
`;
