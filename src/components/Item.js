import React from "react";
function Item({ item, onDelete, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      ></input>
      <p className={item.packed ? "linethrough" : ""}>{item.description}</p>
      <button onClick={() => onDelete(item)}>❌</button>
    </li>
  );
}

export default Item;
