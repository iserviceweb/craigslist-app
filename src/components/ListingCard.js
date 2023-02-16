import React, { useState } from 'react'
// import placeholder from "../assets/placeholder.png";

function ListingCard({ listing, onDeleteListing }) {
  const { id, description, price, location, image } = listing;
  const [isFavorite, setFavorite] = useState(false);
  

  const toggleFavorite = () => {
    setFavorite(!isFavorite);
  };

  function handleDelete() {
    fetch(`http://localhost:3000/listings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        onDeleteListing(id)
          console.log("this is deleted!");
      });
  }

  return (
    <li className="card">
      <div className="image">
        <p>
          <span className="price">${price}</span>
        </p>
        <img src={image} alt="placeholder" />
      </div>
      <div className="details">
        <p>{description}</p>
        <div className="sub_details">
          {isFavorite ? (
            <button className="emoji__btn active" onClick={toggleFavorite}>
              <span className="star">★</span>
            </button>
          ) : (
            <button className="emoji__btn" onClick={toggleFavorite}>
              <span className="star">☆</span>
            </button>
          )}
          <p>{location}</p>
          <button onClick={handleDelete} className="emoji__btn delete">
            🗑️{" "}
          </button>
        </div>
      </div>
    </li>
  );
}

export default ListingCard