import React from "react";
import Item from "./Item";
import { useState } from "react";

function ItemList({ items, onDelete, onToggleItem, onClearList }) {
  const [sortby, setSortBy] = useState("input");

  let sortedItems;
  if (sortby === "input") sortedItems = items;
  if (sortby === "description")
    sortedItems = items.sort((a, b) =>
      a.description.localeCompare(b.description)
    );

  if (sortby === "packed")
    sortedItems = items.sort((a, b) => Number(b.packed) - Number(a.packed));
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelete={onDelete}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="action">
        <select value={sortby} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clearlist</button>
      </div>
    </div>
  );
}

export default ItemList;
