import React from "react";
import { FormItemWrapper } from "./SearchForm.element";

type FormItemProps = {
  children: React.ReactChild;
  formTitle: string;
  formValue: string | number;
};

function FormItem({ children, formTitle, formValue }: FormItemProps) {
  return (
    <FormItemWrapper>
      <div className="form-title">{formTitle}</div>
      <div className="form-value">{formValue}</div>
    </FormItemWrapper>
  );
}

export default FormItem;
