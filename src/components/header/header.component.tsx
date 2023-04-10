import { Link } from "react-router-dom";
import { Title } from "./styled/header.styled";

const Header = () => {
	return (
		<Link to="/">
			<Title>ACC Italia</Title>
		</Link>
	);
};

export default Header;
