import { useState } from "react";
import "./App.css";
import MainHome from "./component/Home/MainHome";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import TodoPage from "./component/TodoList/TodoPage";
import Breadcrumbs from "./component/Home/Breadcrumbs";
import MainCountry from "./component/ListCountry/MainCountry";
import Gallery from "./component/Gallery/Gallery";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/country" element={<MainCountry />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
