"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import { useClickAway, useDebounce } from "react-use";
import { useEffect, useRef, useState } from "react";

export const SearchInput = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useClickAway(containerRef, () => {
    setIsFocused(false);
  });

  useEffect(() => {
    if (!searchQuery) {
      setProducts([]);
    }
  }, [searchQuery]);

  useDebounce(
    async () => {
      if (searchQuery) {
        await Api.products.search(searchQuery).then((items) => setProducts(items));
      }
    },
    100,
    [searchQuery],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleIconClick = () => {
    setIsFocused(true);
    inputRef.current?.focus();
  };

  const handleInputFocus = () => setIsFocused(true);

  const handleItemClick = () => {
    setProducts([]);
    setSearchQuery("");
    setIsFocused(false);
  };

  return (
    <>
      {isFocused && <div className="fixed bottom-0 left-0 right-0 top-0 z-20 bg-black/50" />}
      <div className={cn("relative w-full", isFocused && "z-20")} ref={containerRef}>
        <div className={cn("relative flex h-11 flex-1 justify-between rounded-2xl")}>
          <Search
            className="absolute left-3 top-1/2 h-5 translate-y-[-50%] text-gray-400"
            onClick={handleIconClick}
          />
          <input
            className={"w-full rounded-2xl bg-gray-100 pl-11 outline-none"}
            onChange={handleChange}
            onFocus={handleInputFocus}
            placeholder="Search..."
            type="text"
            ref={inputRef}
            value={searchQuery}
          />
        </div>
        {isFocused && products?.length > 0 && (
          <ul className="absolute left-0 right-0 top-14 rounded-xl bg-white py-3 shadow-md transition-all duration-200">
            {products?.map(({ name, id }) => (
              <Link href={`/product/${id}`} key={id}>
                <li
                  key={id}
                  className="cursor-pointer px-3 py-2 hover:bg-primary/10"
                  onClick={handleItemClick}
                >
                  {name}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
