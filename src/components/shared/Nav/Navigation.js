import { NavLink } from "react-router-dom";
import { NavWrapper, Nav, NavList, NavItem } from "./Navigation.styles";

const Navigation = () => {
  return (
    <NavWrapper>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/articles">Articles</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/create">Create Article</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </NavWrapper>
  );
};

export default Navigation;
