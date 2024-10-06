import { cn } from "@/lib/utils";

const categories = ["category-1", "category-2", "category-3", "category-4"];
const activeIndex = 0;

export const Categories = () => {
  return (
    <div className={"inline-flex gap-1 bg-gray-50 p-1 rounded-2xl"}>
      {categories.map((category, index) => (
        <a
          className={cn(
            "flex items-center h-11 rounded-2xl px-5 font-bold",
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={index}
        >
          <button>{category}</button>
        </a>
      ))}
    </div>
  );
};
