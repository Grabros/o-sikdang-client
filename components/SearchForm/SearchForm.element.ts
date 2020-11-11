import styled from "styled-components";

export const SearchFormWrapper = styled.form`
  display: flex;
  align-items: center;

  margin: 30px auto !important;

  max-width: 850px !important;
  height: 66px;
  border-radius: 32px;

  background-color: #ffffff;

  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.15), 0px 3px 8px rgba(0, 0, 0, 0.1) !important;

  /* display: flex;
  flex-direction: column;
  height: auto; */

  button {
    margin: 0 12px;

    svg {
      font-size: 24px;
    }
  }
`;

export const FormItemWrapper = styled.div`
  width: 100%;
  font-size: 12px;
  padding: 14px 24px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  cursor: pointer;

  transition: 0.3s;

  .form-title {
    font-weight: bold;
    margin-bottom: 4px;
  }

  .form-value {
    color: #717171;
  }

  :hover {
    background: #f0f3f5;
  }
`;
