"use client";
import { cn } from "@/lib/utils";

import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui";

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

export const CheckboxFilterGroup = ({
  className,
  searchInputPlaceholder = "Search...",
  title,
  items,
}: Props) => {
  return (
    <div className={cn("", className)}>
      <p className="font-bold mb-3">{title}</p>

      <div className="mb-5">
        <Input
          className="bg-gray-50 border-none"
          placeholder={searchInputPlaceholder}
        />
      </div>
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
    </div>
  );
};
