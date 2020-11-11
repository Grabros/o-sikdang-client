import styled from "styled-components";
import Container from "../../styles/Container";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  padding: 1.4rem 0;
  background-color: rgb(85, 168, 108);
  color: #fff;
`;

export const HeaderContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .service-logo {
    letter-spacing: 0.15em;
  }
`;

export const HeaderNavWrapper = styled.nav`
  .header-nav-list {
    display: flex;
    align-items: center;
  }

  li {
    margin-left: 1rem;
  }

  a {
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: inline-block;
    padding: 0.6rem 0;
    position: relative;
  }
  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
  }
`;
