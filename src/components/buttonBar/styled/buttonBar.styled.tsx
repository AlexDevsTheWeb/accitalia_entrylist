import styled from "styled-components";
import HouseIcon from "@mui/icons-material/House";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import { Link } from "react-router-dom";

export const ButtonBarWrapper = styled.section`
	height: auto;
	border-bottom: 1px solid #ccc;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: flex-start;
	align-items: center;
	padding: 0px 20px;
	gap: 20px;
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const HomeIconStyled = styled(HouseIcon)`
	color: #333;
	transition: color 0.6s ease-in-out;
	&:hover {
		color: #555;
	}
`;

export const RoomPreferencesIconStyled = styled(RoomPreferencesIcon)`
	color: #333;
	transition: color 0.6s ease-in-out;
	&:hover {
		color: #555;
	}
`;

export const LinkStyled = styled(Link)`
	color: #333;
	text-decoration: none;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
	align-items: center;
	padding: 5px;
	&:hover {
		color: #555;
		background-color: #e0e0e0;
	}
`;
