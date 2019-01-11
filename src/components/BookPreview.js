import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import styled from 'styled-components';

const BookPreview = ({ book }) => (
  <div>
    <CardWrapper>
      <CardImg
        top
        width="100%"
        alt="book image"
        src={book.imageLinks && book.imageLinks.smallThumbnail}
        height="inherit"
      />
      <CardBody>
        <Title> {book.title}</Title>
        <CardSubtitle> {book.authors ? book.authors[0] : ''}</CardSubtitle>
      </CardBody>
    </CardWrapper>
  </div>
);

export default BookPreview;

const CardWrapper = styled.div`
  float: left;
  width: 30%;
  margin: 50px;
  height: 350px;
`;

const Title = styled(CardTitle)`
  display: block;
  font-size: 15x;
  font-weight: 600;
`;
