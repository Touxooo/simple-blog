import React from "react";
import "./index.css";

const SearchBar = ({ value, setValue }) => {
  return (
    <input
      className="searchbar"
      placeholder="Search an article..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchBar;
