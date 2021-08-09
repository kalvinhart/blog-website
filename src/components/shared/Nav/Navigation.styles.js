import styled from "styled-components";

const NavWrapper = styled.div`
  width: 250px;
  height: 80px;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }

  & a {
    font-size: 16px;
  }
`;

export { NavWrapper, Nav, NavList, NavItem };
