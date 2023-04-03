import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrivers } from "../features/drivers/driversSlice";
import DriverContainer from "../components/drivers/driverContainer.component";
import { loginUser } from "../features/login/loginSlice";

const Dashboard = () => {
	const dispatch = useDispatch<any>();
	const { search } = useSelector((store: any) => store.drivers);

	useEffect(() => {
		dispatch(getAllDrivers(""));

		dispatch(loginUser(""));
	}, [search, dispatch]);

	return <DriverContainer />;
};

export default Dashboard;
