import React from "react";
import styled from "styled-components";
import AvailableBalance from "../Blances/AvailableBalance";
import BalanceOnHold from "../Blances/BalanceOnHold";

function TotalBalance() {
  return (
    <Container>
      <Wrapper>
        <AvailableBalance />
        <BalanceOnHold />
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  height: 176px;
  width: 600px;
  margin-top: 2rem;
  border: 1px #ebebeb solid;
  border-radius: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;
export default TotalBalance;
