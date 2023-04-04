import { useEffect, useState } from "react";
import styled from "styled-components";
import EntrylistDriver from "./entrylistDriver.component";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setForceEntryList } from "../../features/entrylist/entrylistSlice";
import {
	exportEntryList,
	addDriverEntriesToEntrylist,
} from "../../features/entrylist/entrylistSlice";

const EntrylistContainer = () => {
	const [numeroAuto, setNumeroAuto] = useState(1);
	const [auto, setAuto] = useState<any>([null]);
	const dispatch = useDispatch<any>();
	const { ready } = useSelector((store: any) => store.entrylist);

	const handleClick = () => {
		setNumeroAuto(numeroAuto + 1);
		setAuto([...auto, <EntrylistDriver auto={numeroAuto} key={numeroAuto} />]);
	};

	const handleChangeForceEntrylist = () => {
		dispatch(setForceEntryList());
	};
	const handleExport = () => {
		dispatch(addDriverEntriesToEntrylist(""));
		dispatch(addDriverEntriesToEntrylist(""));
		dispatch(addDriverEntriesToEntrylist(""));
	};

	useEffect(() => {
		if (ready) {
			dispatch(exportEntryList(""));
		}
	}, [ready, dispatch]);

	return (
		<Wrapper>
			<div>
				<FormGroup>
					<FormControlLabel
						control={<Checkbox defaultChecked />}
						label="Force Entrylist"
						onChange={handleChangeForceEntrylist}
					/>
				</FormGroup>
			</div>
			<div>
				Aggiungi un'auto:{" "}
				<Button variant="contained" onClick={handleClick}>
					Aggiungi
				</Button>
			</div>
			<div>
				<Button variant="contained" onClick={handleExport}>
					ESPORTA
				</Button>
			</div>
			<div>{auto}</div>
		</Wrapper>
	);
};

export default EntrylistContainer;

const Wrapper = styled.section`
	width: 100%;
	margin-top: 300px;
`;
