import { Typography } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: flex-start;
	align-items: center;
	gap: 20px;
	margin: 4px 0px;
`;
export const LabelTypography = styled(Typography)`
	font-size: 18px !important;
	color: #333;
`;
export const ValueTypography = styled(LabelTypography)`
	color: #555;
	font-weight: bold !important;
	text-transform: uppercase !important;
`;
