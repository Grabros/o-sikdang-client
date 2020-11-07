import styled, { css } from "styled-components";

interface ButtonStyleProps {
  themes: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "big";
  fillColor: string;
  hoverColor: string;
  width?: string;
}

export const ButtonWrapper = styled.button<ButtonStyleProps>`
  border: none;
  overflow: visible;
  outline: none;

  /* border-radius: 0.25rem; */
  border-radius: 2rem;
  line-height: 1;
  font-weight: 600;

  transition: 0.3s;

  width: ${(props) => props.width && props.width};

  &:hover {
    background: ${(props) => props.hoverColor};
  }

  &:active {
    opacity: 0.7;
  }

  /* Button Themes */

  ${(props) =>
    props.themes === "primary" &&
    css`
      background-color: ${props.fillColor};
      color: #ffffff;
    `}

  ${(props) =>
    props.themes === "secondary" &&
    css`
      color: ${props.fillColor};
      border-color: ${props.fillColor};
      background-color: #ffffff;
      border: 1px solid;
    `}

  ${(props) =>
    props.themes === "tertiary" &&
    css`
      background-color: inherit;
      color: ${props.fillColor};
    `}

    /* Button Size */

    ${(props) =>
    props.size === "small" &&
    css`
      height: 1.75rem;
      font-size: 0.75rem;
      padding: 0 0.875rem;
    `}

    ${(props) =>
    props.size === "medium" &&
    css`
      height: 2.5rem;
      font-size: 1rem;
      padding: 0 1rem;
    `}
    ${(props) =>
    props.size === "big" &&
    css`
      height: 3rem;
      font-size: 1.125rem;
      padding: 0 1.5rem;
    `}

      &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
`;
