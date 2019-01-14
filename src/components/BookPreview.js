import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import styled from 'styled-components';
import { getAllAuthorsNames } from '../helpers';
import BookDetail from './BookDetail';

const BookPreview = ({ book }) => {
  const [isOpen, toggleDetails] = useState(false);
  const openDetails = () => {
    toggleDetails(openStatus => !openStatus);
  };
  return (
    <div>
      <CardWrapper onClick={openDetails}>
        <CardImg
          top
          width="100%"
          alt="book image"
          src={book.imageLinks && book.imageLinks.smallThumbnail}
          height="inherit"
        />
        <CardBody>
          <Title> {book.title}</Title>
          <CardSubtitle> {getAllAuthorsNames(book.authors)}</CardSubtitle>
        </CardBody>
      </CardWrapper>
      <BookDetail isOpen={isOpen} toggle={openDetails} book={book} />
    </div>
  );
};
export default BookPreview;

const CardWrapper = styled.div`
  float: left;
  width: 10em;
  margin: 50px;
  height: 350px;
  cursor: pointer;
`;

const Title = styled(CardTitle)`
  display: block;
  font-size: 15x;
  font-weight: 600;
`;
