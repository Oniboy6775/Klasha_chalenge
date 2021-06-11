import React from "react";
import styled from "styled-components";

function EachMenu({ icon, content }) {
  return (
    <Container>
      <Wrapper>
        <i class="fas fa-users"></i>
        <h4>{content}</h4>
      </Wrapper>
    </Container>
  );
}
const Container = styled.a`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 52px;
  border: none;
  transition: all ease-in 0.2s;

  &:hover {
    background: #f5f5f5;
    transform: translateY(-3px);
    h4 {
      font-weight: 600;
    }
    &:active {
      background: white;
      border: none;
    }
  }
`;
const Wrapper = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  margin-left: 5rem;
  font-weight: 400;
  line-height: 16.8px;
  font: Founders Grotesk;
  cursor: pointer;

  h4 {
    margin-left: 1rem;
    font-size: 14px;
  }
`;
export default EachMenu;
