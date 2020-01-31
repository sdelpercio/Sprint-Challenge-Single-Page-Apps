import React from "react";

export default function SearchForm({handleChange, input}) {
  return (
    <section className="search-form">
      <label>
        Search for your favorite character:
        <input type='text' name='search' value={input} onChange={handleChange} />
      </label>
    </section>
  );
}
