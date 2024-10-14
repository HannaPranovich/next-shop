"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";

import { Title } from "./title";
import { ProductCard, Props as ProductCardProps } from "./product-card";
import { useCategoryStore } from "@/store/category";

interface Props {
  categoryId: string;
  categoryName: string;
  products: ProductCardProps[];
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList = ({
  categoryId,
  className,
  listClassName,
  products,
  categoryName,
}: Props) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting]);

  return (
    <div className={className} id={categoryName}>
      <Title text={categoryName} size="lg" className="font-extrabold mb-5" />
      <div
        className={cn("grid grid-cols-3 gap-[50px]", listClassName)}
        ref={intersectionRef}
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
