import {
	AppBar,
	Button,
	Dialog,
	IconButton,
	Slide,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { forwardRef, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

import { TransitionProps } from "@mui/material/transitions";
import { useSelector } from "react-redux";
import ReactJson from "react-json-view";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { exportEntryList } from "../../features/entrylist/entrylistSlice";

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const DialogContainer = ({ open, handleCloseDialog }: any) => {
	const dispatch = useDispatch<any>();
	const { entries } = useSelector((store: any) => store.entries);

	const handleExportClick = () => {
		dispatch(exportEntryList(""));
	};

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
						ENTRYLIST
					</Typography>
					<Button autoFocus color="inherit" onClick={handleExportClick}>
						EXPORT ENTRYLIST
					</Button>
				</Toolbar>
			</AppBar>
			<Wrapper>
				<ReactJson
					displayDataTypes={false}
					theme={"threezerotwofour"}
					enableClipboard
					iconStyle="square"
					src={entries}
				/>
			</Wrapper>
		</Dialog>
	);
};

const Wrapper = styled.section`
	border: 1px solid #ccc;
	margin: 30px;
`;
export default DialogContainer;
