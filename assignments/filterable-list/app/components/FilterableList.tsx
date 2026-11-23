"use client";

import { useState } from "react";

type MenuItem = { id: number; name: string };

const MENU: MenuItem[] = [
  { id: 1, name: "Margherita Pizza" },
  { id: 2, name: "Paneer Wrap" },
  { id: 3, name: "Cold Brew" },
  { id: 4, name: "Veg Burger" },
  { id: 5, name: "Masala Fries" },
  { id: 6, name: "Lemon Iced Tea" },
];

export default function FilterableList() {
  const [query, setQuery] = useState("");
  const visible = MENU.filter((item) =>
    item.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <section className="list" aria-labelledby="menu-heading">
      <div className="list-heading">
        <div>
          <p className="section-eyebrow">DISCOVER THE MENU</p>
          <h2 id="menu-heading">Find your favourite.</h2>
        </div>
        <span className="results-count" aria-live="polite">
          {visible.length} / {MENU.length} items
        </span>
      </div>

      <label htmlFor="menu-search" className="search-label">Search by name</label>
      <div className="search-wrap">
        <span aria-hidden="true" className="search-icon">⌕</span>
        <input
          id="menu-search"
          type="search"
          placeholder="Try pizza, masala, tea..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoComplete="off"
        />
        {query && (
          <button type="button" className="clear-button" onClick={() => setQuery("")}>
            Clear
          </button>
        )}
      </div>

      {visible.length === 0 ? (
        <div className="empty" role="status">
          <div className="empty-icon" aria-hidden="true">⌕</div>
          <h3>No matching dishes</h3>
          <p>No items match &ldquo;{query.trim()}&rdquo;. Try another search.</p>
          <button type="button" onClick={() => setQuery("")}>
            Show all menu items
          </button>
        </div>
      ) : (
        <ul className="menu-list" aria-label="Menu search results">
          {visible.map((item) => (
            <li key={item.id} className="menu-item" data-testid="menu-item">
              <span className="item-number">{String(item.id).padStart(2, "0")}</span>
              <span className="item-name">{item.name}</span>
              <span className="item-arrow" aria-hidden="true">↗</span>
            </li>
          ))}
        </ul>
      )}
      <p className="list-footnote">Freshly filtered as you type · Case-insensitive search</p>
    </section>
  );
}
