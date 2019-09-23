import React from 'react';

import Navbar from './../navbar/navbar';
import SearchBar from './../searchbar/searchbar';

export default () => (
  <section className="hero is-dark is-fullheight is-bold">
    <Navbar />
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          Open Books
        </h1>
        <h2 className="subtitle">
          Search and read books for free
        </h2>
        <SearchBar />
      </div>
    </div>
  </section>
);
