import { cn } from "@/lib/utils";
import Image from "next/image";

import { Button } from "../ui";
import { Container, SearchInput } from "./";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between gap-5 py-8">
        <Image src="/logobohobird.webp" alt="logo" width={150} height={110} />

        <SearchInput />

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Login
          </Button>
          <Button className="group relative">
            <b>0 $</b>
            <span className="mx-3 h-full w-[1px] bg-white/30" />
            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
              <ShoppingCart size={16} strokeWidth={2} />
              <b>3</b>
            </div>
            <ArrowRight
              size={20}
              className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </Button>
        </div>
      </Container>
    </header>
  );
};
