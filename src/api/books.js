import ky from 'ky';
/*
 * search for books
 * @params book {string} - book title to search for
 */
const search = book => {
  const query = book.replace(/\s/g, '+');
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&projection=lite`;
  return ky.get(url).then(data => data.json());
};

export default {
  search
};
