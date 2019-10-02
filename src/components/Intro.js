import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  font-size: 5rem;
  margin-bottom: 5rem;
  color: white;
`;

class Intro extends Component {
  render() {
    return <Div> CEOS 운영진을 소개합니다 </Div>;
  }
}

export default Intro;
