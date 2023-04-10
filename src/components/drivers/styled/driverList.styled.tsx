import styled from "styled-components";

export const DriverWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #ccc;
	margin: 10px;
	border-radius: 10px;
	width: 50%;

	&:hover {
		background-color: #cfcfcf;
		cursor: pointer;
	}
`;
