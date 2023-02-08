import React from "react";

function Search({searchQuery, setSearchQuery}) {

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => {
          console.log("Searching...")
          handleSearchChange(e)
        }}
        value={searchQuery}
      />
    </div>
  );
}

export default Search;
