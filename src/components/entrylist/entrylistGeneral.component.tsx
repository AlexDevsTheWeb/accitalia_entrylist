import {
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Grid,
	Typography,
} from "@mui/material";
import { HeaderRightGrid, Wrapper } from "./styled/entrylistGeneral.styled";
import { useSelector } from "react-redux";
import { useState } from "react";
import DialogContainer from "./dialogContainer.component";
import { insertTeamsInEntries } from "../../features/entrylist/entriesSlice";
import { useDispatch } from "react-redux";

const EntrylistGeneral = () => {
	const dispatch = useDispatch<any>();
	const team = useSelector((store: any) => store.team);

	const [open, setOpen] = useState(false);

	const { numeroPiloti, numeroAuto } = useSelector(
		(store: any) => store.entrylist
	);
	const handleClickOpen = () => {
		dispatch(insertTeamsInEntries(team));
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Wrapper>
			<DialogContainer open={open} handleCloseDialog={handleClose} />
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Force Entrylist"
						/>
					</FormGroup>
				</Grid>
				<Grid item xs={4}>
					<Button variant="contained" onClick={handleClickOpen}>
						View Entrylist
					</Button>
				</Grid>
				<HeaderRightGrid item xs={4}>
					<Typography>Numero di auto: {numeroAuto}</Typography>
					<Typography>Numero di piloti: {numeroPiloti}</Typography>
				</HeaderRightGrid>
			</Grid>
		</Wrapper>
	);
};

export default EntrylistGeneral;
