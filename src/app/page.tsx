import { Button, buttonVariants } from "@/components/ui/button";
import {
  ArrowDownToLine,
  CornerRightDown,
  PencilRuler,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const perks = [
    {
      title: "Instant delivery",
      description:
        "Get your favourite assets on your email or download right away.",
      icons: ArrowDownToLine,
    },
    {
      title: "Guaranteed Quality",
      description:
        "Every assets on our planet are assured by the our team, marking up it at standards. ",
      icons: ShieldCheck,
    },
    {
      title: "Unlimited Services",
      description:
        "No worries of the credits, you are free to push your creative boundaries.",
      icons: PencilRuler,
    },
  ];
  return (
    <main className="py-32 text-center">
      <section className="wrapper">
        <h1 className="font-bold  text-4xl">
          Digital Asset <span className="text-primary">Planet</span>
        </h1>
        <h4 className="text-xl mt-2">
          First ever organized way to find the media for the creation.
        </h4>

        <div className="flex gap-3 justify-center mt-5">
          <Link
            href="/"
            className={buttonVariants()}
          >
            Browse Trending
          </Link>
          <Button variant={"ghost"}>Know More </Button>
        </div>
      </section>

      <section className="border-gray-200 border bg-gray-50 py-20 my-32">
        <div className="wrapper flex gap-4">
          {perks.map((item, key) => (
            <div className="flex-1 grid gap-2">
              <div className="w-14 h-14 mx-auto bg-orange-100 rounded-full flex justify-center items-center">
                <item.icons className="text-xl" />
              </div>
              <h4 className="md:text-xl text-base font-medium ">
                {item.title}
              </h4>
              <p className="text-muted-foreground md:text-base text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
