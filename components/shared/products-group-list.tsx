"use client";

import { cn } from "@/lib/utils";

import { Title } from "./title";
import { ProductCard, Props as ProductCardProps } from "./product-card";
import { useRef } from "react";

interface Props {
  title: string;
  products: ProductCardProps[];
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList = ({
  className,
  listClassName,
  products,
  title,
}: Props) => {
  const intersectionRef = useRef(null);

  return (
    <div className={className} id={title}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div
        ref={intersectionRef}
        className={cn("grid grid-cols-3 gap-[50px]", listClassName)}
      >
        {products.map(({ id, name, imageUrl, price }) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            imageUrl={imageUrl}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};
