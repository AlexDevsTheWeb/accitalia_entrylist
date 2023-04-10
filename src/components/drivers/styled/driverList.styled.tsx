import styled from "styled-components";

export const DriverWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #ccc;
	margin: 10px;
	border-radius: 10px;
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
	width: 50%;

	&:hover {
		background-color: #cfcfcf;
		cursor: pointer;
	}
`;
