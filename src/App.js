
import "./App.css";
import React from "react";
import ListingContainer from "./components/ListingContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  

  return (
    <div className="App">
      <Header  />
      <ListingContainer />
      <Footer/>
    </div>
  );
}

export default App;
