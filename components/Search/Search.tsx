import React from "react";

import { SearchWrapper } from "./Search.element";

import SearchForm from "../SearchForm/SearchForm";

const Search = () => {
  return (
    <SearchWrapper>
      <h1>오늘의 식당</h1>
      <h4>“우린 식당 찾을 시간도 아깝다 !”</h4>
      <SearchForm />
    </SearchWrapper>
  );
};

export default Search;
