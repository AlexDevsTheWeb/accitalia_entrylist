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
	height: 100px;
	border-bottom: 1px solid #ccc;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: space-between;
	align-items: center;
`;
export default ButtonBar;
