import { Fab, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Wrapper, WrapperButton } from "./styled/entrylist.styled";
import EntrylistGeneral from "./entrylistGeneral.component";
import { useDispatch, useSelector } from "react-redux";
import { setNumeroAuto } from "../../features/entrylist/entrylistSlice";
import { useEffect, useState } from "react";
import TeamContainer from "../team/teamContainer.component";
import { insertDriversInTeam } from "../../features/team/teamSlice";
import { insertTeamsInEntries } from "../../features/entrylist/entriesSlice";
import {
	insertDriver,
	resetTeamDriver,
} from "../../features/drivers/driversSlice";
import { resetDriver } from "../../features/driver/driverSlice";

const Entrylist = () => {
	const dispatch = useDispatch<any>();
	const { numeroAuto } = useSelector((store: any) => store.entrylist);
	const [num, setNum] = useState(1);
	const { entries } = useSelector((store: any) => store.entries);
	const { teamDrivers } = useSelector((store: any) => store.drivers);

	const team = useSelector((store: any) => store.team);
	const [auto, setAuto] = useState<any>([<TeamContainer key={numeroAuto} />]);

	const handleClick = () => {
		dispatch(setNumeroAuto());

		setNum(num + 1);
		setAuto([...auto, <TeamContainer key={num} />]);
		dispatch(insertTeamsInEntries(team));
		// dispatch(resetTeamDriver());
	};

	return (
		<Wrapper>
			<EntrylistGeneral />
			<div>{auto}</div>
			<TextField
				id="outlined-textarea"
				label="Multiline Placeholder"
				placeholder="Placeholder"
				value={JSON.stringify(entries)}
				multiline
				fullWidth
			/>
			<WrapperButton>
				<Fab color="primary" aria-label="add" onClick={handleClick}>
					<AddIcon />
				</Fab>
			</WrapperButton>
		</Wrapper>
	);
};

export default Entrylist;
