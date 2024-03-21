import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppinglist")) || []);

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  
   
  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  

 


  const addItem = (item) => {
    // Check if the item already exists
    const itemExists = items.some((existingItem) => existingItem.item.toLowerCase() === item.toLowerCase());
    
    if (itemExists) {
      alert("Item already exist");
      return;
    }
  
    // If the item doesn't exist, proceed to add it
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }
  
  

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem("");
    
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
         newItem={newItem}
         setNewItem={setNewItem}
         handleSubmit={handleSubmit}
      />
      <SearchItem
         search={search}
         setSearch={setSearch}
      />
      <Content
         items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
         handleCheck={handleCheck}
         handleDelete={handleDelete}
      
       />
      <Footer length={items.length} />
    </div>
  );
}

export default App;





// import React from 'react'
// import ProjectChallenge from './ProjectChallenge'
// import Div from "./Div";
// import { useState } from 'react'

// const App = () => {

//   const [input, setInput] = useState("");
//   const [hexValue, setHexValue] = useState("");
//   const [isDarkText, setIsDarkText] = useState("");

//   const handleSubmit = (e) =>{
//     e.preventDefault();
   

//   }

  
//   return (
//     <div className='App'>
//        <Div
//           input={input}
//           hexValue={hexValue}
//           isDarkText={isDarkText}
        
//        />
//        <ProjectChallenge 
//          input={input}
//          setInput={setInput}
//          handleSubmit={handleSubmit}
//          hexValue={hexValue}
//          setHexValue={setHexValue}
//          isDarkText={isDarkText}
//          setIsDarkText={setIsDarkText}
//        />
//     </div>
//   )
// }

// export default App