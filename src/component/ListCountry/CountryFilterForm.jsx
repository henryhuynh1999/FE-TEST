import React, { useState, useRef } from "react";
import "./Country.css";
function CountryFilterForm({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);
  const [load, setLoad] = useState("");
  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    setLoad("loader");
    if (!onSubmit) return;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value.toLowerCase(),
      };
      if (value === "") {
        setLoad("");
      }
      onSubmit(formValues);
      setLoad(""); // When was finded country
    }, 500); //500ms after user typing
  }
  return (
    <form className="input-container">
      <input
        style={{ marginLeft: "15px" }}
        type="text"
        placeholder="Find Country"
        className="input-country"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <div class="icon-container">
        <i class={load}></i>
      </div>
    </form>
  );
}

export default CountryFilterForm;
