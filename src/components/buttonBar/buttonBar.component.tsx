import {
	ButtonBarWrapper,
	HomeIconStyled,
	RoomPreferencesIconStyled,
} from "./styled/buttonBar.styled";

import { Link } from "react-router-dom";

const ButtonBar = () => {
	return (
		<ButtonBarWrapper>
			<Link to="/" title="Home" style={{ color: "#000" }}>
				<HomeIconStyled />
			</Link>
			<Link to="/entrylist" title="Entrylist" style={{ color: "#000" }}>
				<RoomPreferencesIconStyled />
			</Link>
		</ButtonBarWrapper>
	);
};

export default ButtonBar;
