import { Grid } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
	border: 2px solid #ddd;
	border-radius: 5px;
	padding: 10px 20px;
	position: sticky;
	top: 0;
	background: white;
	z-index: 100;
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const HeaderRightGrid = styled(Grid)`
	display: flex !important;
	flex-direction: column !important;
	align-content: flex-end !important;
	align-items: flex-end !important;
	justify-content: center !important;
	flex-wrap: wrap !important;
`;
