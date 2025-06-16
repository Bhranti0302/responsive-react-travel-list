import { useState } from "react";
import Header from "./components/Header";
import FormAddItem from "./components/FormAddItem";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDelete(item) {
    setItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem.id !== item.id)
    );
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  } // we are creating one new array where packed item change in opposite(false=true or true=false)

  function handleClearList() {
    const confirmed = window.confirm(
      "Are You sure you want to do delete all Items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <FormAddItem items={items} onAddItem={handleAddItem} />
      <ItemList
        items={items}
        onDelete={handleDelete}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
