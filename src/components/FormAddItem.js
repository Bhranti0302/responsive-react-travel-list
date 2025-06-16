import React from "react";
import { useState } from "react";

function FormAddItem({ items, onAddItem }) {
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: items.length + 1,
      description,
      quantity,
      packed: false,
    };

    console.log(newItem);
    onAddItem(newItem);

    setDescription("");
    setQuantity("");
  }

  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}

export default FormAddItem;
