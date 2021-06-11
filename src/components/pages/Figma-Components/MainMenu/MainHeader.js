import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";

function MainHeader() {
  const date = new Date();
  const day = date.getDate();
  return (
    <Container>
      <div>
        <h4>Balances</h4>
        <h6>Today {day > 3 && day <= 20 && `${day}th`} June 2021</h6>
      </div>
      <Avatar />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div > h4 {
    color: #2a2a2a;
  }
  div > h6 {
    color: #a6abb2;
  }
`;
export default MainHeader;
