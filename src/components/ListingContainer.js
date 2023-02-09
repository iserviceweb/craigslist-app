import React, { useState, useEffect } from 'react';


function ListingContainer({search}) {
  const [listings, setListings] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/listings")
      .then((res) => res.json())
      .then(console.log);
  }, [])
 


  return (
    <main className="main_ui">
      <ul className="cards">
        {/* ListingCards  */}
      </ul>
    </main>
  );
}

export default ListingContainer