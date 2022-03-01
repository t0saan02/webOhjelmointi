import React, { useState } from "react";
import ProductsData from "../data/products";
import Item from "./Item";

function ItemList() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="navbar-item">
        <form action="">
          <label for="search">SEARCH</label>

          <input
            type="text"
            id="search"
            name="search"
            placeholder="search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>

          {ProductsData.filter((p) => {
            if (searchTerm === "") {
              return null;
            } else if (
              p.name
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return p.name;
            }
          }).map((p, key) => {
            return <div>{p.name}</div>;
          })}
          {/* <button type="submit">search</button> */}
        </form>
      </div>
      <div className="items-container">
        {ProductsData.map((p) => (
          <Item name={p.name} image={p.image} price={p.price} key={p.uuid} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
