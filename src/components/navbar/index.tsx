"use client";

import Link from "next/link";
import React from "react";
import { Icons } from "../icons";
import NavItems from "../navItems";

export default function Navbar() {
  return (
    <nav className="wrapper flex justify-between py-3">
      <Link
        href="/"
        className=""
      >
        <Icons.logo className="w-10 stroke-primary fill-none" />
      </Link>

      <NavItems />
    </nav>
  );
}
