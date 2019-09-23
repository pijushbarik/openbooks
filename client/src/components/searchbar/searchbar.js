import React from 'react';

import SearchIcon from './../../assets/search.svg';
import styles from './searchbar.module.css';

export default (props) => (
  <form>
    <div className="field">
      <div className={["control", styles["search-bar"]].join(" ")}>
        <input 
          type="text" 
          className="input is-large is-rounded"
          placeholder="Search for books"
          required />
        <button
          className={["button", styles["search-button"]].join(" ")}>
            <img 
              src={SearchIcon}
              alt="Search button"/>
        </button>
      </div>
    </div>
  </form>
);
