import Driver from "../team/driver.component";
import { Wrapper } from "./styled/entrylistDriver.styled";

const EntrylistDriver = ({ auto }: any) => {
	return (
		<Wrapper>
			<div>auto: {auto}</div>
			<div>Tipo di auto:</div>
			<Driver />
		</Wrapper>
	);
};

export default EntrylistDriver;
