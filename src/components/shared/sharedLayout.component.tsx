import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../header/header.component";
import ButtonBar from "../buttonBar/buttonBar.component";

const SharedLayout = () => {
	return (
		<>
			<Navbar>
				<Header />
			</Navbar>
			<ButtonBar />
			<Outlet />
		</>
	);
};

const Navbar = styled.section`
	background: rgb(0, 0, 0);
	background: linear-gradient(
		107deg,
		rgba(0, 0, 0, 1) 14%,
		rgba(15, 121, 9, 1) 16%,
		rgba(255, 255, 255, 1) 19%,
		rgba(255, 255, 255, 1) 25%,
		rgba(255, 0, 0, 1) 28%,
		rgba(255, 0, 0, 1) 29%,
		rgba(241, 12, 14, 1) 30%,
		rgba(2, 0, 36, 1) 30%
	);
	height: auto;
	width: 100%;
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.607);
	display: block;
	margin-bottom: 20px;
	    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}
`;

export default SharedLayout;
