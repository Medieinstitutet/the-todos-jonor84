import React, { useState } from "react";

function ShowList() {
  let items = [
    "Clean house",
    "Do the dishes",
    "Go shopping",
    "Clean car",
    "Take out the garbage",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <div className="container">
        <h1>My todo list</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              - {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ShowList;
