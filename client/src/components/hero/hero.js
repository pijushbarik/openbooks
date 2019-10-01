import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './../navbar/navbar';
import SearchBar from './../searchbar/searchbar';
import styles from './hero.module.css';

export default (props) => (
  <section className="hero is-black is-fullheight is-bold">
    <Navbar />
    <div className={["hero-body", styles["hero-custom"]].join(" ")}>
      <div className="container has-text-centered">
        <h1 className="title">
          Open Books
        </h1>
        <h2 className="subtitle">
          Read your favorite books for free!
        </h2>
        <SearchBar 
          searchRef={props.searchRef} 
          searchOnSubmit={props.searchOnSubmit} />
        <Link
          to="/search"
          className="button is-link is-rounded" 
          style={{marginTop: 20}} >Advanced Search</Link>
      </div>
    </div>
  </section>
);
