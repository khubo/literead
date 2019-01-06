import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from './containers/Navbar';
import Searchbar from './containers/Searchbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <MainWrapper>
        <Navbar />
        <Searchbar />
      </MainWrapper>
    );
  }
}

const MainWrapper = styled.div`
  padding: 0px;
`;

export default App;
