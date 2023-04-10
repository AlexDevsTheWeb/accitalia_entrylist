import { Outlet } from "react-router-dom";
import Header from "../header/header.component";
import ButtonBar from "../buttonBar/buttonBar.component";
import { ButtonBarWrapper, Navbar, Wrapper } from "./styled/shared.styled";

const SharedLayout = () => {
	return (
		<Wrapper>
			<Navbar>
				<Header />
			</Navbar>
			<ButtonBarWrapper>
				<ButtonBar />
			</ButtonBarWrapper>
			<Outlet />
		</Wrapper>
	);
};

export default SharedLayout;
