const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    title: { type: GraphQLString },
    subtitle: { type: GraphQLString },
    notes: { type: GraphQLString },
    publishers: { 
      type: new GraphQLList(new GraphQLObjectType({
        name: 'Publisher',
        fields: () => ({
          name: { type: GraphQLString }
        })
      })) 
    },
    authors: { 
      type: new GraphQLList(new GraphQLObjectType({
        name: 'Author',
        fields: () => ({
          name: { type: GraphQLString },
          url: { type: GraphQLString }
        })
      }))
    },
    number_of_pages: { type: GraphQLInt },
    identifiers: {
      type: new GraphQLObjectType({
        name: 'Identifiers',
        fields: () => ({
          lccn: { type: new GraphQLList(GraphQLString) },
          oclc: { type: new GraphQLList(GraphQLString) },
          isbn_10: { type: new GraphQLList(GraphQLString) },
          isbn_13: { type: new GraphQLList(GraphQLString) },
          openlibrary: { type: new GraphQLList(GraphQLString) },
          goodreads: { type: new GraphQLList(GraphQLString) }
        })
      })
    },
    publish_date: { type: GraphQLString },
    cover: {
      type: new GraphQLObjectType({
        name: 'Cover',
        fields: () => ({
          small: { type: GraphQLString },
          medium: { type: GraphQLString },
          large: { type: GraphQLString }
        })
      })
    },
    subjects: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'Subject',
        fields: () => ({
          name: { type: GraphQLString }
        })
      }))
    }
  })
});