"use client";
import { SearchManuFacturerProps } from "@/types";
import { Combobox } from "@headlessui/react";

export default function SearchManuFacturer({
  manuFacturer,
  setManuFacturer,
}: SearchManuFacturerProps) {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full"></div>
      </Combobox>
    </div>
  );
}
