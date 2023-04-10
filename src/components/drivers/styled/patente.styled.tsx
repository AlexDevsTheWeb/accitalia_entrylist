import styled from "styled-components";

interface Props {
	type: string;
}

export const PatenteWrapper = styled.div<Props>`
	font-size: 20px;
	font-weight: bold;
	color: white;
	min-width: 50px;
	padding: 10px;
	text-align: center;
	-webkit-border-top-left-radius: 10px;
	-webkit-border-bottom-left-radius: 10px;
	-moz-border-radius-topleft: 10px;
	-moz-border-radius-bottomleft: 10px;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	background-color: white;

	background-color: ${(props) =>
		props.type === "GT3"
			? "#e41a17"
			: props.type === "GT4"
			? "#f39224"
			: props.type === "M2"
			? "#0c66b0"
			: "#ff0000"};
`;
