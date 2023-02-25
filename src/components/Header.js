import React from 'react'
import "../App.css"
import Search from './Search'


function Header({onSearch}) {
  return (
    <header>
      <h1 className="title__container">
        <div className="cl__logo">
          ☮
        </div>
        Craigslist
      </h1>
      <Search onSearch={onSearch} />
      
   </header>
  )
}

export default Header
