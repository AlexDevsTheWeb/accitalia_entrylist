import { Fab, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Wrapper, WrapperButton } from "./entrylist.styled";
import EntrylistGeneral from "./entrylistGeneral.component";
import { useDispatch, useSelector } from "react-redux";
import {
	insertAllEntries,
	setNumeroAuto,
} from "../../features/entrylist/entrylistSlice";
import { useEffect, useState } from "react";
import EntrylistDriver from "./entrylistDriver.component";
import TeamContainer from "../team/teamContainer.component";
import { insertDriversInTeam, resetTeam } from "../../features/team/teamSlice";
import { insertTeamsInEntries } from "../../features/entrylist/entriesSlice";
import { resetDriver } from "../../features/driver/driverSlice";
import { ExposureTwoTone } from "@mui/icons-material";

const Entrylist = () => {
	const dispatch = useDispatch<any>();
	const { numeroAuto } = useSelector((store: any) => store.entrylist);
	const { drivers } = useSelector((store: any) => store.team);
	const { firstName } = useSelector((store: any) => store.driver);

	const [auto, setAuto] = useState<any>([null]);

	const handleClick = () => {
		//ispatch(insertDriversInTeam(""));
		dispatch(resetTeam());
		dispatch(resetDriver());

		dispatch(insertTeamsInEntries(""));

		dispatch(setNumeroAuto());
		setAuto([...auto, <TeamContainer key={numeroAuto} />]);
	};

	return (
		<Wrapper>
			<EntrylistGeneral />
			<div>{auto}</div>
			<TextField
				id="outlined-textarea"
				label="Multiline Placeholder"
				placeholder="Placeholder"
				value=""
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
