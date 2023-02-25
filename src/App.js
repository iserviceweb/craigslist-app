
import "./App.css";
import React, { useState } from "react";
import ListingContainer from "./components/ListingContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("")
  
  function handleSearch(newSearch) {
    setSearch(newSearch);
  }
  

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <ListingContainer search={search} />
      <Footer />
    </div>
  );
}

export default App;
