import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <h1 className="logo">general.</h1>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4rem;
  height: 8rem;
  display: flex;
  background: ${({ theme }) => theme.colors.bg};
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`;

export default Header;
