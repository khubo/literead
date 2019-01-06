import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from './containers/Navbar';
import Searchbar from './containers/Searchbar';
import BookList from './containers/BookList';

import './App.css';

class App extends Component {
  render() {
    return (
      <MainWrapper>
        <Navbar />
        <Searchbar />
        <BookList />
      </MainWrapper>
    );
  }
}

const MainWrapper = styled.div`
  padding: 0px;
`;

export default App;
