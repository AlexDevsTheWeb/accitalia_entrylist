import { useSelector } from "react-redux";
import DriversList from "./driversList.component";
import SearchContainer from "../search/SearchContainer.component";

const DriverContainer = () => {
	const { drivers } = useSelector((store: any) => store.drivers);

	return (
		<div>
			<SearchContainer />
			{drivers ? (
				Object.values(drivers).map((driver, index) => {
					return <DriversList key={index} driver={driver} />;
				})
			) : (
				<div style={{ color: "white", backgroundColor: "black" }}>
					NOT AN ARRAY
				</div>
			)}
		</div>
	);
};

export default DriverContainer;
