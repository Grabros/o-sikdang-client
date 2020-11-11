import React from "react";

import Button from "../Reusable/Button/Button";
import { SearchFormWrapper } from "./SearchForm.element";
import { BiSearchAlt } from "react-icons/bi";

import FormItem from "./FormItem";

function SearchForm() {
  return (
    <SearchFormWrapper>
      <FormItem formTitle="위치" formValue="행정구 입력"></FormItem>
      <FormItem formTitle="거리" formValue="500m"></FormItem>
      <FormItem formTitle="분류" formValue="무작위"></FormItem>

      <Button fillColor={"rgb(85, 168, 108)"}>
        <BiSearchAlt />
      </Button>
    </SearchFormWrapper>
  );
}

export default SearchForm;
