"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

const categories = [
  { id: "categoryId-1", name: "Dresses" },
  { id: "categoryId-2", name: "Top" },
  { id: "categoryId-3", name: "Bottoms" },
];

export const Categories = () => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={"inline-flex gap-1 rounded-2xl bg-gray-50 p-1"}>
      {categories.map(({ id: categoryId, name }, index) => (
        <a
          key={index}
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-bold",
            categoryActiveId === categoryId && "bg-white text-primary shadow-md shadow-gray-200",
          )}
          href={`/#${name}`}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
