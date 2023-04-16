import { Stack } from "@mui/material";
import styled from "styled-components";
export const Wrapper = styled.section`
	border: 1px solid #ccc;
	border-radius: 10px;
	margin-top: 4px;
`;
export const AutoWrapper = styled.section`
	background-color: #073868;
	padding: 5px;
	color: #fff;
	font-weight: bold;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	text-align: center;
	text-transform: uppercase;
	font-size: 20px;
`;

const MyStack = styled(Stack)`
	display: flex !important;
	flex-direction: column !important;
	flex-wrap: wrap !important;
	align-content: space-between !important;
	justify-content: space-between !important;
	align-items: stretch !important;
	height: 100% !important;
`;
