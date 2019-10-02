import React, { Component } from 'react';

import Intro from "./components/Intro";
import styled, { createGlobalStyle } from 'styled-components';

const Row = styled.div`
  display:flex;
  flex-direction:row;
`

const GlobalStyle = createGlobalStyle`
  html{
    font-size:10px;
  }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: '최수민', univ: '서강', major: '컴퓨터공학', age: 25, feeling: '행복',
          favoriteAnimal: ['사자', '토끼', '뱀'] },
        { name: '이한길', univ: '홍익', major: '법학', age: 29, feeling: '불행',
          favoriteAnimal: ['펭귄'] },
        { name: '김서영', univ: '이화여자', major: '사이버보안학', age: 22, feeling: '불행',
          favoriteAnimal: ['웜', '트로이목마'] }
      ]
    }
  }

  render() {
    return <div className="App">
      <GlobalStyle />
      <Row>
        <Intro data={this.state.people[0]}/>
        <Intro data={this.state.people[1]}/>
        <Intro data={this.state.people[2]}/>
      </Row>
    </div>;
  }
}

export default App;
