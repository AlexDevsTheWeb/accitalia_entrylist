import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrivers } from "../features/drivers/driversSlice";
import DriverContainer from "../components/drivers/driverContainer.component";

const Dashboard = () => {
	const dispatch = useDispatch<any>();
	const { search } = useSelector((store: any) => store.drivers);

	useEffect(() => {
		dispatch(getAllDrivers(""));
	}, [search]);

	return <DriverContainer />;
};

export default Dashboard;
