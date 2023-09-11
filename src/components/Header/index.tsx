import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitleWrapper>
        <HeaderTitle>Users</HeaderTitle>
      </HeaderTitleWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 8vh;
  background-color: #0094f6;
`;

const HeaderTitleWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  height: 8vh;
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.div`
  color: white;
  font-size: 1.5rem;
`;
