import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { InputGroup, Input, Button } from 'reactstrap';

import { searchBooks } from '../actions/books';

const SearchBar = ({ searchBooks }) => {
  const search = () => {
    let book = document.getElementById('search').value;
    if (book.trim()) {
      searchBooks(book);
    }
  };
  const handleKeypress = event => {
    if (event.key === 'Enter') {
      search();
    }
  };

  return (
    <SearchWrapper>
      <InputGroup>
        <Input
          autoFocus={true}
          onKeyPress={handleKeypress}
          placeholder="Search for books you need..."
          id="search"
        />
        <Button onClick={search}>Search</Button>
      </InputGroup>
    </SearchWrapper>
  );
};

export default connect(
  null,
  { searchBooks }
)(SearchBar);

const SearchWrapper = styled.div`
  margin: 50px auto;
  text-align: center;
  box-shadow: 2px;
  width: 80%;
`;
