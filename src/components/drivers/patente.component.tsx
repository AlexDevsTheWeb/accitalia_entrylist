import { PatenteWrapper } from "./styled/patente.styled";

const Patente = ({ patente, punti }: any) => {
	return (
		<PatenteWrapper type={patente}>
			{patente ? patente : "N/A"} <br />
			{punti}
		</PatenteWrapper>
	);
};

export default Patente;
