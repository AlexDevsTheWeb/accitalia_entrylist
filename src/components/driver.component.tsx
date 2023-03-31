import styled from "styled-components";

const Driver = ({ driver }: any) => {
	const { steamid, punti } = driver;

	return (
		<DriverWrapper>
			<SteamIDWrapper>{steamid}</SteamIDWrapper>
			<PuntiPatenteWrapper>{punti}</PuntiPatenteWrapper>
		</DriverWrapper>
	);
};

const DriverWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	border: 1px solid #ccc;
	margin: 10px;
	padding: 10px;
`;

const SteamIDWrapper = styled.div`
	border: 1px solid #ff9900;
`;
const PuntiPatenteWrapper = styled.div`
	border: 1px solid #ee0099;
`;

export default Driver;
