"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useRef, useState } from "react";

export const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleIconClick = () => {
    setIsFocused(true);
    inputRef.current?.focus();
  };

  const handleInputFocus = () => setIsFocused(true);
  const handleInputBlur = () => setIsFocused(false);

  return (
    <>
      {isFocused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-20" />
      )}
      <div className={cn("w-full relative", isFocused && "z-20")}>
        <div
          className={cn(
            "flex flex-1 justify-between relative h-11 rounded-2xl "
          )}
        >
          <Search
            className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400"
            onClick={handleIconClick}
          />
          <input
            className={"rounded-2xl outline-none w-full bg-gray-100 pl-11"}
            onChange={handleChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Search..."
            type="text"
            ref={inputRef}
            value={searchQuery}
          />
        </div>
        {isFocused && searchQuery && (
          <ul className="absolute left-0 right-0 top-14 bg-white rounded-xl py-3 shadow-md transition-all duration-200 ">
            <li
              key={"index"}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSearchQuery("");
                setIsFocused(false);
              }}
            >
              {searchQuery}
            </li>
          </ul>
        )}
      </div>
    </>
  );
};
