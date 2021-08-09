import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: #f4f4f4;
`;

const HeaderContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfoWrapper = styled.div`
  width: 200px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { StyledHeader, HeaderContentWrapper, UserInfoWrapper };
