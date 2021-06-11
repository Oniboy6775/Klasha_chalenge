import React from "react";
import styled from "styled-components";
import EachMenu from "./EachMenu";
import logo from "../img/logo.svg";

function SideBar() {
  return (
    <Container>
      <div>
        <img src={logo} alt="logo" />
        <h3>Main menu</h3>
      </div>
      <EachMenu icon="" content="Dashboard" />
      <EachMenu icon="" content="Balances" />
      <EachMenu icon="" content="Customer" />
      <EachMenu icon="" content="Analysis" />
      <h3>General</h3>
      <EachMenu icon="" content="Settings" />
      <EachMenu icon="" content="Team" />
      <EachMenu icon="" content="Contact" />
      <EachMenu icon="" content="Logout" />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 280px;
  /* border: 2px red solid; */
  background: rgba(255, 255, 255, 0.2);
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5rem auto;
  }
`;
export default SideBar;
