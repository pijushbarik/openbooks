const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} = require('graphql');

const {
  fetchBookInfoById,
  searchBooksByTitle
} = require('./../openlibraryapi/api');

const BookType = require('./BookType');
const SearchType = require('./SearchType');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    book: {
      type: BookType,
      args: {
        isbn: { type: GraphQLString },
        olid: { type: GraphQLString }
      },
      resolve: (parent, args) => fetchBookInfoById(
        args.isbn ? {idType: 'isbn', id: args.isbn} : {idType: 'olid', id: args.olid}
      )
    },
    search: {
      type: SearchType,
      args: {
        title: { type: GraphQLString }
      },
      resolve: (parent, args) => searchBooksByTitle(args.title)
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
