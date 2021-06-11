import React from "react";
import styled from "styled-components";
import MainHeader from "../MainMenu/MainHeader";

import TotalBalance from "../MainMenu/TotalBalance";

function MainMenu() {
  return (
    <Container>
      <MainHeader />
      <TotalBalance />
    </Container>
  );
}
const Container = styled.div`
  background-color: white;
  width: 100%;
  padding: 2rem;
`;
export default MainMenu;
