import React from "react";
import styled from "styled-components";

function BalanceOnHold() {
  return (
    <Container>
      <h6>Funds on hold</h6>
      <hr />
      <div>
        <h1>$5,332.18</h1>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  width: 50%;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 10px;
`;
export default BalanceOnHold;
