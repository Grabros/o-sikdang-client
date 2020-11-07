import React from "react";

import { HeaderNavWrapper } from "./Header.element";
import Button from "../Reusable/Button/Button";

function HeaderNav() {
  return (
    <HeaderNavWrapper>
      <ul className="header-nav-list">
        <li>
          <a href="">FEED</a>
        </li>
        <li>
          <a href="">LIST</a>
        </li>
        <li>
          <a href="">LOGIN</a>
        </li>
      </ul>
    </HeaderNavWrapper>
  );
}

export default HeaderNav;
