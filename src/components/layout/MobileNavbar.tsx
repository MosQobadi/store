"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

export const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="sm:hidden fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />

        <NavbarBrand>
          <span className="font-semibold text-lg">store.</span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/" className="w-full text-lg" onClick={closeMenu}>
            Home
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link href="/products" className="w-full text-lg" onClick={closeMenu}>
            Products
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link
            href="/categories"
            className="w-full text-lg"
            onClick={closeMenu}
          >
            Categories
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
