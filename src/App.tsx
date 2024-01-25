import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TodoProvider } from "./components/TodoContext";

import ShowList from "./components/ShowList";
import AddItem from "./components/ShowAddItem";
import ShowHeader from "./components/ShowHeader";
import ShowFooter from "./components/ShowFooter";

function App() {
  return (
    <Router>
      <TodoProvider>
        <ShowHeader />
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/add" element={<AddItem />} />
        </Routes>
        <ShowFooter />
      </TodoProvider>
    </Router>
  );
}

export default App;
