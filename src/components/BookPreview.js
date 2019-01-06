import React from 'react';
import styled from 'styled-components';

const BookPreview = ({ book }) => (
  <BookWrapper>
    <Img src={book.imageLinks && book.imageLinks.smallThumbnail} />
    <span> {book.title}</span>
  </BookWrapper>
);

export default BookPreview;

const BookWrapper = styled.div`
  float: left;
  width: 50%;
  height: 300px;
`;

const Img = styled.img`
  display: block;
  height: 200px;
`;
