import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Function to handle adding new items
  const addItem = (e) => {
    e.preventDefault();
    if (newItem.trim() !== "") {
      setItems([...items, newItem]); // Add new item to the list
      setNewItem(""); // Clear input after adding
    }
  };

  return (
    <div id="container">
      {/* Navbar */}
      <div id="navbar">
        <div id="logo">
          <a href="">
            <img src="/images/logo.svg" alt="Logo" />
          </a>
        </div>

        <div id="search-box">
          <form onSubmit={addItem}>
            <input
              type="text"
              placeholder="Add new item"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </div>

        <div id="logout">
          <a href="">
            <img src="/images/logout.svg" alt="Logout" />
          </a>
        </div>
      </div>

      <hr />

      {/* Body (Item List) */}
      <div id="body">
        {items.map((item, index) => (
          <div key={index} className="item-box">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;
