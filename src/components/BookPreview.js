import React from 'react';
import styled from 'styled-components';

const BookPreview = ({ book }) => (
  <BookWrapper>
    <img src={book.imageLinks.smallThumbnail} />
    <span> {book.title}</span>
  </BookWrapper>
);

export default BookPreview;

const BookWrapper = styled.div`
  float: left;
`;
