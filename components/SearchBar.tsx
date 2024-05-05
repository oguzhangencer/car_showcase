"use client";

import { useState } from "react";
import SearchManuFacturer from "./SearchManuFacturer";

export default function SearchBar() {
  const [manuFacturer, setManuFacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManuFacturer
          manuFacturer={manuFacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
}
