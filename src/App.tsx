import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import SharedLayout from "./components/shared/sharedLayout.component";
import Dashboard from "./pages/Dashboard.page";
import Entrylist from "./pages/Entrylist.page";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route path="/" element={<Dashboard />}></Route>
					<Route path="entrylist" element={<Entrylist />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
