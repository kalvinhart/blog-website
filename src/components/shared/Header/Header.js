import React from "react";

import { StyledHeader, HeaderContentWrapper, UserInfoWrapper } from "./Header.styles";
import { Container } from "../../../styles/containerStyles";
import Navigation from "../Nav/Navigation";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderContentWrapper>
          <h1>Header</h1>
          <Navigation />
          <UserInfoWrapper></UserInfoWrapper>
        </HeaderContentWrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;
