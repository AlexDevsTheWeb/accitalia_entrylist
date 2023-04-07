import { TextField } from "@mui/material";
import styled from "styled-components";
import { nameCleaner } from "../../utils/nameCleaner.utils";

const TeamDriver = ({ matches }: any) => {
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
			<TextField disabled value={`${nomeIntero} (${shortname})`} />
			<TextField disabled value={steamid} />
		</Wrapper>
	);
};

const Wrapper = styled.section``;
export default TeamDriver;
