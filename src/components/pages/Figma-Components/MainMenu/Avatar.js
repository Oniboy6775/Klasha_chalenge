import React from "react";
import styled from "styled-components";
import avatar from "../img/image 1avatar.png";
function Avatar() {
  return (
    <Container>
      <Avatar_div>
        <div>
          <i class="fas fa-users"></i>
        </div>
        <span>
          <img src={avatar} alt="" />
        </span>
      </Avatar_div>
    </Container>
  );
}

const Container = styled.div`
  width: 120px;
`;
const Avatar_div = styled.div`
  display: flex;
  /* width: 10%; */
  justify-content: space-between;
  div {
    height: 48px;
    width: 48px;
    border-radius: 30px;
    border: 1px red solid;
    background-color: #f5f5f5;
    cursor: pointer;
    color: #200e32;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 20px;
      color: red;
    }
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 30px;
    cursor: pointer;
    border: 1px #ff8377 solid;
    background-color: rgba(255, 131, 119, 0.1);
  }
`;
export default Avatar;
