import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      <span> / {title}</span>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  padding: 1rem;
  font-size: 2rem;
  a {
    color: ${({ theme }) => theme.colors.btn};
  }
  span {
    cursor: pointer;
  }
`;
export default PageNavigation;
