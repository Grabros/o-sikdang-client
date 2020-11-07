import React from "react";

import { HeaderWrapper, HeaderContainer } from "./Header.element";

import HeaderNav from "./HeaderNav";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <a href="/">
          <p className="service-logo">오늘의식당</p>
        </a>
        <HeaderNav />
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
