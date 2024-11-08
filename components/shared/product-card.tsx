import Link from "next/link";
import { Button } from "@/components/ui";
import { Plus } from "lucide-react";
import { Title } from "./title";

export interface Props {
  id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}

export const ProductCard = ({ description, id, imageUrl, name, price }: Props) => {
  return (
    <div>
      <Link href={`/product/${id}`}>
        <div className="flex h-[260px] justify-center rounded-lg bg-secondary p-6">
          <img className="h-[215px] w-[215px]" src={imageUrl} alt="product image" />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">{description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[20px]">
            от <b>{price} $</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus className="mr-1 h-5 w-5" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
