"use clients";

import { PRODUCT_CATEGORIES } from "@/config";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function NavItems() {
  const [activeIndex, setActiveIndex] = useState<null | number>();

  const [isOpen, setOpen] = useState(false);

  const isAnyOpen = activeIndex !== null;

  return (
    <div className="flex gap-2">
      {PRODUCT_CATEGORIES.map((el: any, i: number) => {
        function handleOpen() {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        }
        return (
          <div
            key={i}
            className=""
          >
            <NavItem
              isOpen={isOpen}
              label={el.label}
              categories={el.featured}
              handleOpen={handleOpen}
              isAnyOpen={isAnyOpen}
            />
          </div>
        );
      })}
    </div>
  );
}

const NavItem = ({
  label,
  categories,
  handleOpen,
  isAnyOpen,
  isOpen,
}: {
  label: string;
  categories: [];
  isAnyOpen?: boolean;
  handleOpen: () => void;
  isOpen: boolean;
}) => {
  return (
    <div className="">
      <Button
        onClick={handleOpen}
        variant={isOpen ? "secondary" : "link"}
        className="flex gap-1"
      >
        {label}
        <ChevronDown className={cn("w-4", { "-rotate-90": isOpen })} />
      </Button>
      {isOpen ? (
        <div className="fixed top-14 left-0 h-fit w-screen bg-white shadow">
          <div className="wrapper flex gap-4 py-5 ">
            {categories.map((itm: any) => (
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={itm.imgSrc}
                  alt={itm.name}
                  width={400}
                  height={400}
                  className="rounded-lg "
                />
                <h4 className="text-md mt-2 font-semibold">{itm.name}</h4>
                <Link
                  className="text-sm"
                  href={itm.href}
                >
                  Shop Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
