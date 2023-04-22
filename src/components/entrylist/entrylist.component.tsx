import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Wrapper, WrapperButton } from "./styled/entrylist.styled";
import EntrylistGeneral from "./entrylistGeneral.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { insertTeamsInEntries } from "../../features/entrylist/entriesSlice";
import TeamDialogContainer from "./teamDialogContainer.component";
import NewTeamContainer from "../team/newTeamContainer.component";
import { setNumeroAuto } from "../../features/entrylist/entrylistSlice";

const Entrylist = () => {
	const dispatch = useDispatch<any>();
	const [num, setNum] = useState(1);
	const [open, setOpen] = useState(false);

	const team = useSelector((store: any) => store.team);
	const { numeroAuto } = useSelector((store: any) => store.entrylist);
	const [newAuto, setNewAuto] = useState<any>([null]);

	const handleClick = () => {
		dispatch(setNumeroAuto());

		// setNum(num + 1);
		// setAuto([...auto, <TeamContainer key={num} />]);
		if (team.drivers.length > 0) {
			dispatch(insertTeamsInEntries(team));
		}

		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (team.drivers.length > 0) {
			setNewAuto([
				...newAuto,
				<NewTeamContainer key={num} team={team} number={numeroAuto} />,
			]);
		}
		setNum(num + 1);
	}, [team]);

	return (
		<Wrapper>
			<EntrylistGeneral />
			<TeamDialogContainer open={open} handleCloseDialog={handleClose} />
			<div>{newAuto}</div>

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
