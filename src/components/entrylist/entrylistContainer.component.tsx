import { Button, Fab, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Wrapper, WrapperButton, WrapperButton2 } from "./entrylist.styled";
import Entrylist from "./entrylist.component";
import { ExposureTwoTone } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
	exportEntryList,
	insertAllEntries,
	setNumeroAuto,
} from "../../features/entrylist/entrylistSlice";
import TeamContainer from "../team/teamContainer.component";
import { insertDriversInTeam, resetTeam } from "../../features/team/teamSlice";
import { resetDriver } from "../../features/driver/driverSlice";
import { insertTeamsInEntries } from "../../features/entrylist/entriesSlice";

const EntrylistContainer = () => {
	const dispatch = useDispatch<any>();
	const { numeroAuto } = useSelector((store: any) => store.entrylist);
	const { drivers } = useSelector((store: any) => store.team);

	const [auto, setAuto] = useState<any>([null]);

	const handleExportClick = () => {
		dispatch(insertTeamsInEntries(""));
		dispatch(insertAllEntries(""));
		dispatch(exportEntryList(""));
	};

	return (
		<>
			<Entrylist />

			<WrapperButton2>
				<Button variant="contained" onClick={handleExportClick}>
					EXPORT
				</Button>
			</WrapperButton2>
		</>
	);
};

export default EntrylistContainer;
