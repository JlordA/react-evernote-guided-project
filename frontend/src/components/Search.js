import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        value={props.searchValue}
        onChange={props.searchHandler}
      />
    </div>
  );
}

export default Search;
