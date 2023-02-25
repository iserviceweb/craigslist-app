import React, { useState, useEffect } from 'react';
import ListingCard from './ListingCard';
import { BsSortNumericDown } from "react-icons/bs";
import { BiSortDown } from "react-icons/bi";

function ListingContainer({search}) {
  const [listings, setListings] = useState([]);
  const [sortBy, setSortBy] = useState("id");


  useEffect(() => {
    fetch("http://localhost:3000/listings")
      .then((res) => res.json())
      .then((listings)=>setListings(listings));
  }, [])
  console.log(listings);

  function handleDeleteListings(id){
    const updatedListingArray = listings.filter(
      (listing) => listing.id !== id
    )
    setListings(updatedListingArray);
  }

  const listingCards = listings
    .filter((listing) =>
      listing.description.toLowerCase().includes(search.toLowerCase())
    )
    .sort((listingA, listingB) => {
      if (sortBy === "id") {
        return listingA.id - listingB.id;
      } else {
        return listingA.location.localeCompare(listingB.location);
      }
    })
    .map((listingObj) => {
      return (
        <ListingCard
          key={listingObj.id}
          listing={listingObj}
          onDeleteListing={handleDeleteListings}
        />
      );
    });


  return (
    <main className="main_ui">
      <div className="side_container">
        <div className="sort_items">
          <p className="form_label">Sort by</p>
          <div>
            <button
              onClick={() => setSortBy("id")}
              className="sort_btn"
            >
              <span className="icons">
                <BsSortNumericDown />
              </span>
              <span className="label">Default</span>
            </button>
          </div>
          <div>
            <button
              onClick={() => setSortBy("location")}
              className="sort_btn"
            >
              <span className="icons">
                <BiSortDown />
              </span>
              <span className="label">Location</span>
            </button>
          </div>
        </div>
      </div>
      <ul className="cards"> {listingCards}</ul>
    </main>
  );
}

export default ListingContainer