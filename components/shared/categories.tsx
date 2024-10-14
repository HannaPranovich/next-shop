"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

const categories = [
  { id: "categoryId-1", name: "categoryName-1" },
  { id: "categoryId-2", name: "categoryName-2" },
  { id: "categoryId-3", name: "categoryName-3" },
];

export const Categories = () => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={"inline-flex gap-1 bg-gray-50 p-1 rounded-2xl"}>
      {categories.map(({ id: categoryId, name }, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center h-11 rounded-2xl px-5 font-bold",
            categoryActiveId === categoryId &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
