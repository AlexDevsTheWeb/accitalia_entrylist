import Entrylist from "./entrylist.component";
import { useState } from "react";
import DialogContainer from "./dialogContainer.component";
import { Wrapper } from "./styled/entrylistContainer.styled";

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

export default EntrylistContainer;
