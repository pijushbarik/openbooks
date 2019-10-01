import React from 'react'

export default (props) => (
  <div 
    className="column is-one-fifth card" 
    key={props.key}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img 
            src={props.cover}
            alt={props.title + ' cover'}/>
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p className="title is-4">{props.title}</p>
          {
            props.authors ? 
            props.authors.map((author, idx) => <p className="subtitle is-6" key={idx}>{author.name}</p>) :
            ''  
          }
          <p>{props.publishDate}</p>
          
        </div>
      </div>
  </div>
);
