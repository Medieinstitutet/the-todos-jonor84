import React, { useEffect, useState } from "react";
import { useTodoContext } from "./TodoContext";

function ShowList() {
  const { todoItems, markAsFinished, markAsUnfinished, removeItem } =
    useTodoContext();
  const [activeTab, setActiveTab] = useState("unfinished");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (activeTab === "unfinished") {
      setFilteredItems(todoItems.filter((item) => !item.finished));
    } else {
      setFilteredItems(todoItems.filter((item) => item.finished));
    }
  }, [todoItems, activeTab]);

  const handleMarkAsFinished = (item) => {
    markAsFinished(item);
  };

  const handleMarkAsUnfinished = (item) => {
    markAsUnfinished(item);
  };

  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs">
        <li className="nav-item text-bold">
          <button
            className={`nav-link ${activeTab === "unfinished" ? "active" : ""}`}
            onClick={() => setActiveTab("unfinished")}
          >
            Unfinished
          </button>
        </li>
        <li className="nav-item text-bold">
          <button
            className={`nav-link ${activeTab === "finished" ? "active" : ""}`}
            onClick={() => setActiveTab("finished")}
          >
            Finished
          </button>
        </li>
      </ul>

      <ul className="list-group mt-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={item.text}
            >
              <div>
                <span
                  className={
                    item.finished ? "text-decoration-line-through" : ""
                  }
                >
                  {item.text}
                </span>
              </div>
              <div>
                {!item.finished && (
                  <button
                    className="btn btn-sm btn-success me-2"
                    onClick={() => handleMarkAsFinished(item)}
                  >
                    Mark as Finished
                  </button>
                )}
                {item.finished && (
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleMarkAsUnfinished(item)}
                  >
                    Mark as Unfinished
                  </button>
                )}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleRemoveItem(item)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No items</p>
        )}
      </ul>
    </div>
  );
}

export default ShowList;
