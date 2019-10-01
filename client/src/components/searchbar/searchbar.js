import React from 'react';

import SearchIcon from './../../assets/search.svg';
import styles from './searchbar.module.css';

export default (props) => (
  <form onSubmit={props.searchOnSubmit}>
    <div className="field">
      <div className={["control", styles["search-bar"]].join(" ")}>
        <input 
          type="text" 
          className="input is-large is-rounded"
          placeholder="Search for books"
          required
          autoFocus
          ref={props.searchRef} />
        <button
          className={["button", styles["search-button"]].join(" ")}
          onClick={props.searchOnSubmit}>
            <img 
              src={SearchIcon}
              alt="Search button"/>
        </button>
      </div>
    </div>
  </form>
);
