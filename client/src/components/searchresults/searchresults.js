import React from 'react'

import SearchResult from './searchresult/searchresult';

export default (props) => (
  <div className="columns is-multiline">
    {
      props.searchResult.map(res => <SearchResult 
        key={res.cover_edition_key}
        title={res.book_info.title}
        cover={
          res.book_info.cover ? 
          res.book_info.cover.medium : 
          "https://via.placeholder.com/150/?text=Cover%20not%20available"
        }
        publishDate={res.book_info.publish_date || ''}
        authors={res.book_info.authors}
      />)
    }
  </div>
);
