import { TextField } from "@mui/material";
import styled from "styled-components";
import { nameCleaner } from "../../utils/nameCleaner.utils";

const TeamDriver = ({ matches, number }: any) => {
	const { nome, steamid } = matches;
	const nomeIntero = nameCleaner(nome);

	let shortname = "";
	const nomeArray = nomeIntero.split(" ");
	if (nomeArray.length > 2) {
		shortname = nomeArray[2].substring(0, 3).toUpperCase();
	} else if (nomeArray.length == 2) {
		shortname = nomeArray[1].substring(0, 3).toUpperCase();
	} else {
		shortname = nomeArray[0].substring(0, 3).toUpperCase();
	}

	return (
		<Wrapper>
			<TextField
				variant="standard"
				disabled
				fullWidth
				value={`${number} - ${nomeIntero} (${shortname}) - ${steamid}`}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.section``;
export default TeamDriver;
