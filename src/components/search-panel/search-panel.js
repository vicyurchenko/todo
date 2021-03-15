import React from "react";
import "./search-panel.css"

const SearchPanel = (props) => {
  const searchText = "Type here to search";

  return (
    <input type="text"
           className="form-control search-input"
           placeholder={searchText}
           onChange={props.onSearchChange}
    />
  );
};

export default SearchPanel;