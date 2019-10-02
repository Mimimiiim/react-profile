import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";

import Intro from "./components/Intro";
import ProfileList from "./components/ProfileList";

const GlobalSytle = createGlobalStyle`
  html{
    font-size:10px;
  }
  body{
    background-color:#E0D3CC;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalSytle />
        <Intro />
        <ProfileList />
      </div>
    );
  }
}

export default App;
