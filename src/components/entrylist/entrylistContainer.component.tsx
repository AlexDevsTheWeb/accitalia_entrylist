import { Button } from "@mui/material";
import { WrapperButton2 } from "./entrylist.styled";
import Entrylist from "./entrylist.component";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { exportEntryList } from "../../features/entrylist/entrylistSlice";
import styled from "styled-components";

const EntrylistContainer = () => {
	const dispatch = useDispatch<any>();

	const handleExportClick = () => {
		dispatch(exportEntryList(""));
	};

	return (
		<Wrapper>
			<Entrylist />

			<WrapperButton2>
				<Button variant="contained" onClick={handleExportClick}>
					EXPORT
				</Button>
			</WrapperButton2>
		</Wrapper>
	);
};

const Wrapper = styled.section``;
export default EntrylistContainer;
