import { ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
	width: -webkit-fill-available;
`;

export const Navbar = styled.div`
	background: rgb(0, 0, 0);
	background: linear-gradient(
		107deg,
		rgba(0, 0, 0, 1) 14%,
		rgba(15, 121, 9, 1) 16%,
		rgba(255, 255, 255, 1) 19%,
		rgba(255, 255, 255, 1) 25%,
		rgba(255, 0, 0, 1) 28%,
		rgba(255, 0, 0, 1) 29%,
		rgba(241, 12, 14, 1) 30%,
		rgba(2, 0, 36, 1) 30%
	);
	height: auto;
	/* box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.607); */
	display: block;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: space-between;
	align-items: center;
	padding: 2px 20px;
`;

export const ButtonBarWrapper = styled.div``;
export const OutletWrapper = styled.div``;

export const SharedLink = styled(Link)`
	font-size: 30px !important;
	color: #666 !important;
	text-decoration: none !important;
	font-weight: 900 !important;
`;

export const SharedLinkText = styled(ListItemText)`
	font-weight: 900;
	text-transform: uppercase;

	&:hover {
		font-weight: 700;
		text-decoration: underline;
		color: #333;
	}
`;
