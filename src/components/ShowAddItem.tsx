import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTodoContext } from "./TodoContext";

function ShowAddItem() {
  const { addItem } = useTodoContext();
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleSave = () => {
    if (text.trim() !== "") {
      addItem({ text, finished: false });
      navigate("/");
    }
  };

  return (
    <div className="container mt-4 xl-6">
      <div className="row">
        <div className="col-3">
          <h2 className="mb-3">Add Item</h2>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="itemText"
                placeholder="Item Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShowAddItem;
