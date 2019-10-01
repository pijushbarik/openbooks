import {gql} from 'apollo-boost';

export default gql `
query($title: String) {
  search(title: $title) {
    docs {
      cover_edition_key
      book_info {
        title 
        authors {
          name
        }
        publish_date
        cover {
          medium
        }
      }
    }
  }
}
`;
