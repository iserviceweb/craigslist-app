import React, { useState, useEffect } from 'react';
import ListingCard from './ListingCard';

function ListingContainer() {
  const [listings, setListings] = useState([]);


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
  
  const listingCards = listings.map((listingObj) =>{
    return (
      <ListingCard
        key={listingObj.id}
        listing={listingObj}
        onDeleteListing={handleDeleteListings}
      />
    );
  })


  return (
    <main className="main_ui">
      <ul className="cards">
        {listingCards}</ul>
    </main>
  );
}

export default ListingContainer