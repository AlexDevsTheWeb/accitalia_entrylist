import {
	AppBar,
	Dialog,
	IconButton,
	Slide,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { forwardRef } from "react";

import CloseIcon from "@mui/icons-material/Close";

import { TransitionProps } from "@mui/material/transitions";
import { Wrapper } from "./styled/dialogContainer.styled";
import TeamContainer from "../team/teamContainer.component";

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const TeamDialogContainer = ({ open, handleCloseDialog }: any) => {
	return (
		<Dialog
			fullScreen
			open={open}
			onClose={handleCloseDialog}
			TransitionComponent={Transition}
		>
			<AppBar sx={{ position: "relative" }}>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						onClick={handleCloseDialog}
						aria-label="close"
					>
						<CloseIcon />
					</IconButton>
					<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
						Crea un nuovo TEAM
					</Typography>
				</Toolbar>
			</AppBar>
			<Wrapper>
				<TeamContainer handleCloseDialog={handleCloseDialog} />
			</Wrapper>
		</Dialog>
	);
};

export default TeamDialogContainer;
