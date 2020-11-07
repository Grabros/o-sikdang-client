import React from "react";
import { ButtonWrapper } from "./Button.element";

interface ButtonProps {
  /** 다른 스타일의 버튼 테마 */
  themes?: "primary" | "secondary" | "tertiary";
  /** 버튼의 사이즈를 설정 */
  size?: "small" | "medium" | "big";
  /** 버튼의 width를 임의로 설정 */
  width?: string;
  /** 버튼 내부의 내용 */
  children?: React.ReactNode;
  /** 버튼의 background-color 설정 */
  fillColor?: string;
  /** 버튼 hover시 색상 설정 */
  hoverColor?: string;
  /** 버튼 비활성화 설정 */
  disabled?: boolean;
  /** 클릭시 호출 함수 */
  onClick?: Function;
}

/**
 * - 다양한 스타일의 Button을 생성할 때 `Button` 컴포넌트를 사용하세요.
 * - 모든 Props는 Default가 정해져 있으며 값을 전달하지 않은 속성은 Default 속성이 적용됩니다.
 */

function Button({
  onClick,
  width,
  children = "Button",
  themes = "primary",
  size = "medium",
  fillColor = "#000000",
  hoverColor = "#38d9a9",
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonWrapper
      themes={themes}
      size={size}
      width={width}
      fillColor={fillColor}
      hoverColor={hoverColor}
      disabled={disabled}
    >
      {children}
    </ButtonWrapper>
  );
}

export default Button;
