import React from "react";
import styled from "styled-components";
import MainMenu from "./Figma-Components/MainMenu/MainMenu";
import SideBar from "./Figma-Components/SideMenu/SideBar";
const Home = () => {
  return (
    <Container>
      <MainWrapper>
        <SideBar />
        <MainMenu />
      </MainWrapper>
    </Container>
  );
};
const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* height: 900px;
  width: 1440px; */
  width: 100%;
  height: 100%;
  background: #e5e5e5;
`;
const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
export default Home;
