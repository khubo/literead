import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { getAllAuthorsNames } from '../helpers';
import styled from 'styled-components';

const BookDetail = ({ isOpen, toggle, book }) => {
  const handleToggle = () => {
    toggle();
  };

  return (
    <div>
      <Modal isOpen={isOpen} toggle={handleToggle} centered={true} size="lg">
        <ModalHeader toggle={handleToggle}>{book.title}</ModalHeader>

        <ModalBody>
          <Wrapper>
            <img
              alt="book "
              src={book.imageLinks && book.imageLinks.thumbnail}
              height="100%"
            />
            <div style={{ marginLeft: '10px' }}>
              <b>{book.subtitle}</b>
              <p>
                Authors: <b>{getAllAuthorsNames(book.authors)}</b>
              </p>
              <a href={book.infoLink}>More info</a>
              <p>
                Published on <b>{book.publishedDate}</b>
              </p>
              <p>
                Published by <b>{book.publisher}</b>
              </p>
              <p>Description: {book.description}</p>
            </div>
          </Wrapper>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={handleToggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={handleToggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default BookDetail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
