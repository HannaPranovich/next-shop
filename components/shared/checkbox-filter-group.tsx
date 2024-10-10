"use client";

import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui";
import { useState } from "react";

interface Props {
  className: string;
  defaultItems?: FilterCheckboxProps[];
  limit: number;
  title: string;
  items: FilterCheckboxProps[];
  searchInputPlaceholder?: string;
  selectedIds?: Set<string>;
  onClickCheckbox?: (value: string) => void;
  loading?: boolean;
}

const processItems = ({
  rawItems,
  searchValue,
}: {
  rawItems: FilterCheckboxProps[];
  searchValue: string;
}) => {
  const shouldFilterItems = Boolean(searchValue);

  return shouldFilterItems
    ? rawItems.filter(({ text }) =>
        text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : rawItems;
};

export const CheckboxFilterGroup = (props: Props) => {
  const { className, limit, title, items } = props;

  const isExceedsLimit = items.length > limit;

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {isExceedsLimit ? (
        <CheckboxFilterGroupWithSearch {...props} />
      ) : (
        <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
          {items.map(({ text, value, endAdornment }, index) => (
            <FilterCheckbox
              key={index}
              text={text}
              value={value}
              // checked={false}
              onCheckedChange={() => console.log(`clicked ${value}`)}
              endAdornment={endAdornment}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const CheckboxFilterGroupWithSearch = ({
  searchInputPlaceholder = "Search...",
  limit,
  items,
}: Props) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const itemsToDisplay = showAll
    ? processItems({ rawItems: items, searchValue })
    : items.slice(0, limit);

  const handleChangeSearchInput = ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };

  return (
    <>
      {showAll && (
        <div className="mb-5">
          <Input
            className="bg-gray-50 border-none"
            placeholder={searchInputPlaceholder}
            onChange={handleChangeSearchInput}
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {itemsToDisplay.map(({ text, value, endAdornment }, index) => (
          <FilterCheckbox
            key={index}
            text={text}
            value={value}
            // checked={false}
            onCheckedChange={() => console.log(`clicked ${value}`)}
            endAdornment={endAdornment}
          />
        ))}
      </div>

      <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
        <button
          className="text-primary mt-3"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Hide" : "+ ShowAll"}
        </button>
      </div>
    </>
  );
};
