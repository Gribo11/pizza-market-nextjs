import { cn } from "@/shared/lib/utils";
import Link from "@/node_modules/next/link";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/index";
import { CartButton, Container, SearchInput } from "./index";
import { User, ShoppingCart, ArrowRight } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border-b border-gray-100", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" width={35} height={35} alt="Logo" />
            <div>
              <h1 className="text-2xl uppercase font-black">
                Next Pizza Market
              </h1>
              <p className="text-sm text-gray-400 leading-3">So tasty</p>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1">
            <SearchInput />
          </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Sign in
          </Button>

          <CartButton/>
        </div>
      </Container>
    </header>
  );
};
