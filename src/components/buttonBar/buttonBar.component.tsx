import { Typography } from "@mui/material";
import {
	ButtonBarWrapper,
	HomeIconStyled,
	LinkStyled,
	RoomPreferencesIconStyled,
} from "./styled/buttonBar.styled";

const ButtonBar = () => {
	return (
		<ButtonBarWrapper>
			<LinkStyled to="/" title="Home">
				<HomeIconStyled />
				<Typography>Home</Typography>
			</LinkStyled>

			<LinkStyled to="/entrylist" title="Entrylist">
				<RoomPreferencesIconStyled />
				<Typography>Entrylist</Typography>
			</LinkStyled>
		</ButtonBarWrapper>
	);
};

export default ButtonBar;
