import useDebouncedValue from "@/hooks/useDebounceValue";
import useHomeStore from "@/store/home";
import { Search as SearchIcon } from "@mui/icons-material";
import { alpha, InputBase, styled } from "@mui/material";
import { useEffect, useState } from "react";

const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
  width: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "20ch",
  },
}));

const Search = () => {
  const { setSearchTerm, searchTerm, fetchCards } = useHomeStore(
    (state) => state
  );
  const debouncedVal = useDebouncedValue(searchTerm, 500);
  useEffect(() => {
    fetchCards(debouncedVal);
  }, [debouncedVal]);
  return (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </StyledSearch>
  );
};

export default Search;
