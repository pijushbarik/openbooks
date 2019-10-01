import React from 'react'

export default (props) => (
  <form onSubmit={props.onSubmitForm}>
    <div className="field has-addons">
      <div className="control">
        <input
          type="text"
          className="input"
          placeholder={props.placeholder} />
      </div>
      <div className="control">
        <input 
          type="submit"
          className="button is-info"
          value="Search"
          onClick={props.onSubmitForm} />
      </div>
    </div>
  </form>
);