import { Grid } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
	border: 2px solid #ddd;
	border-radius: 5px;
	padding: 20px;
`;

export const HeaderRightGrid = styled(Grid)`
	display: flex !important;
	flex-direction: column !important;
	align-content: flex-end !important;
	align-items: flex-end !important;
	justify-content: center !important;
	flex-wrap: wrap !important;
`;
