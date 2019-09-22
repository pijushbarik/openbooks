const axios = require('axios');

const getOpenLibraryURI = (idType, id) => {
  return `http://openlibrary.org/api/books?bibkeys=${
    idType.toUpperCase()}:${id}&jscmd=data&format=json`;
};

const fetchBookInfoById = async (idInfo) => {
  let response = await axios.get(getOpenLibraryURI(idInfo.idType, idInfo.id));
  return response.data[`${idInfo.idType.toUpperCase()}:${idInfo.id}`];
};

const searchBooksByTitle = async (title) => {
  let queryString = title.trim().split(" ").join("+");
  let response = await axios.get(`http://openlibrary.org/search.json?title=${
    queryString}`);
  return response.data;
}

module.exports = {
  fetchBookInfoById,
  searchBooksByTitle
};