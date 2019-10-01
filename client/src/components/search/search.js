import React from 'react';
import { graphql } from 'react-apollo';
import queryString from 'query-string';

import { queryBooksByTitle } from '../../queries';

import Navbar from '../navbar/navbar';
import AdvancedSearchBar from './advancedsearchbar/advancedsearchbar';
import SearchResults from './../searchresults/searchresults';

const searchResult = (props) => {
  console.log(props);
  const msgDefault = 'Search results will appear here!';
  const msgLoading = 'Loading...';
  const msgErr = 'Something went wrong :('
  let searchResult = [];
  
  if(
    !props.data.loading &&
    !props.data.err &&
    props.data.search
  ) {
      searchResult = props.data
        .search.docs
        .filter(doc => doc.cover_edition_key !== null);
        console.log("search result (filtered)");
      console.log(searchResult);
  }

  return(
    <React.Fragment>
      <Navbar />
      {/* <div className="section" style={{marginTop: 15}}>
        <AdvancedSearchBar />
      </div> */}
      <section className="section">
        <div className="container has-text-centered">
          {
            !props.data.variables.title ? <p>{msgDefault}</p> :
            props.data.loading ? <p>{msgLoading}</p> :
            props.data.err ? <p>{msgErr}</p> :
            !props.data.search ? <p>{msgErr}</p> :
            <SearchResults searchResult={searchResult}/>
          }
        </div>
      </section>
    </React.Fragment>
  );
}

export default graphql(queryBooksByTitle, {
  options: (props) => {
    let searchQuery = queryString.parse(props.location.search)['q'];
    if(searchQuery !== "") return {
      variables: {
        title: searchQuery
      }
    }
  }
})(searchResult);
