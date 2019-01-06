import React from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import styled from 'styled-components';

const SearchBar = () => (
  <SearchWrapper>
    <InputGroup>
      <Input placeholder="Search for books you nerd..." />
      <Button addonType="append">Search</Button>
    </InputGroup>
  </SearchWrapper>
);

export default SearchBar;

const SearchWrapper = styled.div`
  margin: 50px auto;
  text-align: center;
  box-shadow: 2px;
  width: 50%;
`;
