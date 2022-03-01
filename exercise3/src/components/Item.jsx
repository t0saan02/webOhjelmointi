import React from "react";

function Item({ name, image, price }) {
  return (
    <div className="product-item">
      <h2>{name}</h2>
      <img src={image} alt="product-name" />
      <h3>{price} $</h3>
      <button> ADD </button>
    </div>
  );
}

export default Item;
