import { Button } from "@mui/material";
import styled from "styled-components";

const ButtonBar = () => {
	return (
		<ButtonBarWrapper>
			<Button variant="contained" href="/entrylist">
				Entrylist
			</Button>
		</ButtonBarWrapper>
	);
};

const ButtonBarWrapper = styled.section`
	height: auto;
	border-bottom: 1px solid #ccc;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
`;
export default ButtonBar;
