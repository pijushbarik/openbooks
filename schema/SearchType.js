const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require('graphql');

const BookType = require('./BookType');
const { fetchBookInfoById } = require('./../openlibraryapi/api');

module.exports = new GraphQLObjectType({
  name: 'Search',
  fields: () => ({
    num_found: { type: GraphQLInt },
    docs: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'Doc',
        fields: () => ({
          title: { type: GraphQLString },
          cover_edition_key: { type: GraphQLString },
          book_info: { 
            type: BookType,
            resolve: (parent, args) => fetchBookInfoById({
              idType: 'olid', 
              id: parent.cover_edition_key
            })
          }
        })
      }))
    }
  })
});