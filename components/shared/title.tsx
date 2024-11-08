import React from "react";
import { cn } from "@/lib/utils";

const mapTagBySize = {
  xs: "h5",
  sm: "h4",
  md: "h3",
  lg: "h2",
  xl: "h1",
  "2xl": "h1",
} as const satisfies Record<TitleSize, string>;

const mapClassNameBySize = {
  xs: "text-[16px]",
  sm: "text-[22px]",
  md: "text-[26px]",
  lg: "text-[32px]",
  xl: "text-[40px]",
  "2xl": "text-[48px]",
} as const satisfies Record<TitleSize, string>;

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface Props {
  text: string;
  className?: string;
  size?: TitleSize;
}

export const Title = ({ text, size = "sm", className }: Props) => {
  return React.createElement(
    mapTagBySize[size],
    { className: cn(mapClassNameBySize[size], className) },
    text,
  );
};
