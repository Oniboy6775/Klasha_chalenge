import React from "react";
import styled from "styled-components";

function AvailableBalance() {
  return (
    <Container>
      <Wrapper>
        <div>
          <h6>Total account balance</h6>
          <Select>
            <option value="USD">USD</option>
            <option value="KES">KES</option>
            <option value="NGN">NGN</option>
            <option value="GHC">GHC</option>
          </Select>
        </div>
        <hr />
        <div>
          <h1>
            $5,332.18<span>1USD = 381.97</span>
          </h1>
        </div>
      </Wrapper>
    </Container>
  );
}
const Select = styled.select`
  height: 25px;
  width: 68px;
  align-self: center;

  option {
    color: red;
    height: 33px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  div {
    display: flex;
    justify-content: space-between;
    margin-top: -1rem;
  }

  h1 {
    display: flex;
    flex-direction: column;
    span {
      color: #a6abb2;
      font-size: 16px;
    }
  }
  h6 {
    color: #2c665d;
    font-weight: 400px;
    font-size: 14px;
  }
`;
const Container = styled.div`
  padding: 1rem;
  width: 50%;
  height: 100%;
  background-color: #fff;
`;

export default AvailableBalance;
