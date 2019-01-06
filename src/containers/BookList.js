import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import BookPreview from '../components/BookPreview';

class BookList extends React.Component {
  render() {
    const { loading, books } = this.props;

    if (loading) {
      return <div> Loading ...</div>;
    }

    return (
      <ContentWrapper>
        {books.map(book => (
          <BookPreview book={book} key={book.id} />
        ))}
      </ContentWrapper>
    );
  }
}

export default connect(
  ({ books: { loading, books } }) => ({
    loading,
    books
  }),
  null
)(BookList);

const ContentWrapper = styled.div`
  margin: 20px;
`;
