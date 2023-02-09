import React from 'react'
import "../App.css"


function Header({onSearch}) {
  return (
    <header>
      <h1 className="title__container">
        <div className="cl__logo">
          ☮
        </div>
        Craigslist
      </h1>
      {/* Search.js component goes here */}
      
   </header>
  )
}

export default Header
