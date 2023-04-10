import {
	Checkbox,
	FormControlLabel,
	FormGroup,
	Grid,
	Typography,
} from "@mui/material";
import { HeaderRightGrid, Wrapper } from "./styled/entrylistGeneral.styled";
import { useSelector } from "react-redux";

const EntrylistGeneral = () => {
	const { numeroPiloti, numeroAuto } = useSelector(
		(store: any) => store.entrylist
	);
	return (
		<Wrapper>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Force Entrylist"
						/>
					</FormGroup>
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
