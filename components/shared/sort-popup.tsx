import { ArrowUpDown } from "lucide-react";

export const SortPopup = () => {
  return (
    <div className="inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer">
      <ArrowUpDown size={16} />
      <b>Sort:</b>
      <b className="text-primary">Popular</b>
    </div>
  );
};
