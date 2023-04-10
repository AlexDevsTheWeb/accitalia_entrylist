import { Button, Slide } from "@mui/material";
import Entrylist from "./entrylist.component";
import { forwardRef, useState } from "react";
import styled from "styled-components";
import { TransitionProps } from "@mui/material/transitions";
import DialogContainer from "./dialogContainer.component";

const EntrylistContainer = () => {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Wrapper>
			<Entrylist />

			<DialogContainer open={open} handleCloseDialog={handleClose} />
		</Wrapper>
	);
};

const Wrapper = styled.section``;
export default EntrylistContainer;
