import { Button, Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Wrapper, WrapperButton } from "./styled/entrylist.styled";
import EntrylistGeneral from "./entrylistGeneral.component";
import { useDispatch, useSelector } from "react-redux";
import { setNumeroAuto } from "../../features/entrylist/entrylistSlice";
import { useState } from "react";
import TeamContainer from "../team/teamContainer.component";
import { insertTeamsInEntries } from "../../features/entrylist/entriesSlice";
import { addTeamToLS, getTeamFromLS } from "../../utils/localstorage";

const Entrylist = () => {
	const dispatch = useDispatch<any>();
	const [num, setNum] = useState(1);

	const team = useSelector((store: any) => store.team);
	const [auto, setAuto] = useState<any>([<TeamContainer key={0} />]);

	const handleClick = () => {
		dispatch(setNumeroAuto());

		setNum(num + 1);
		setAuto([...auto, <TeamContainer key={num} />]);
		dispatch(insertTeamsInEntries(team));
	};

	return (
		<Wrapper>
			<EntrylistGeneral />
			<div>{auto}</div>

			<WrapperButton>
				<Button
					color="primary"
					aria-label="add"
					onClick={handleClick}
					variant="contained"
				>
					<AddIcon />
					<Typography>Aggiungi TEAM</Typography>
				</Button>
			</WrapperButton>
		</Wrapper>
	);
};

export default Entrylist;
