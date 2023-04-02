import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSearch } from "../../features/drivers/driversSlice";
import { useState } from "react";

const SearchContainer = () => {
	const [searchValue, setSearchValue] = useState("");
	const dispatch = useDispatch<any>();

	const handleChange = (e: any) => {
		setSearchValue(e.target.value);
		dispatch(setSearch(e.target.value));
	};

	return (
		<SearchWrapper>
			<TextField
				id="outlined-helperText"
				label="Search driver by name"
				value={searchValue}
				onChange={(e: any) => handleChange(e)}
			/>
		</SearchWrapper>
	);
};

const SearchWrapper = styled.section`
	margin: 10px;
`;

export default SearchContainer;
