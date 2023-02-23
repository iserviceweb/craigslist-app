import React, { useState } from 'react'
import { ImSearch } from "react-icons/im";

function Search({onSearch}) {
  const [currentSearch,setCurrentSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(currentSearch);
}


  return (
    <form className="search__bar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search for sale"
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button type="submit">
        <ImSearch />
      </button>
    </form>
  );
}

export default Search