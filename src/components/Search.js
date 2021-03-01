import React, { useState } from "react";

function Search({query, setQuery}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        id="search"
        placeholder="Type a name to search..."
      />
    </div>
  );
}

export default Search;
