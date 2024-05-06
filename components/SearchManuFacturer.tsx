"use client";
import { SearchManuFacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";

export default function SearchManuFacturer({
  manuFacturer,
  setManuFacturer,
}: SearchManuFacturerProps) {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="./car-logo.svg"
              alt="Car Logo"
              className="ml-4"
              width={20}
              height={20}
            />
            <Combobox.Input
              className="search-manufacturer__input"
              placeholder="Volkswagen"
              displayValue={(manufacturer: string) => manufacturer}
              onChange={(event) => setQuery(event.currentTarget.value)}
            />
            <Transition
              as={Fragment}
              leave="transition eas-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options>
                {filteredManufacturers.length === 0 && query !== "" ? (
                  <Combobox.Option
                    value={query}
                    className="search-manufacturer__option"
                  >
                    Create "{query}"
                  </Combobox.Option>
                ) : (
                  filteredManufacturers.map((item) => (
                    <Combobox.Option
                      key={item}
                      value={item}
                      className={({ active }) => `
                      reative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gary-900"
                      }
                      `}
                    >
                      {item}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  );
}
