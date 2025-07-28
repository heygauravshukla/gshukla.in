"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { motion } from "motion/react";
import { HiBars2, HiOutlineXMark } from "react-icons/hi2";

import { Wrapper } from "@/components/wrapper";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

export function SiteHeader() {
  const navItems: NavItem[] = [
    { label: "About", href: "/about" },
    { label: "Articles", href: "/articles" },
    { label: "Projects", href: "/projects" },
    { label: "Bookmarks", href: "/bookmarks" },
    { label: "Contact", href: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleLinkClick() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-gray-800 bg-gray-950/85 backdrop-blur-sm">
      <Wrapper className="flex items-center justify-between gap-4 py-4">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/avatar.jpg"
            alt="Gaurav Shukla's avatar"
            width={40}
            height={40}
            className="size-8 rounded-full"
          />
        </Link>

        {/* Mobile Menu */}
        <motion.ul
          id="mobile-menu"
          initial={{
            opacity: 0,
            y: 50,
            display: "none",
          }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            y: isMenuOpen ? 0 : 50,
            display: isMenuOpen ? "grid" : "none",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 z-50 min-h-screen place-content-center place-items-center gap-4 bg-gray-950"
        >
          {navItems.map((item, idx) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                y: isMenuOpen ? 0 : 20,
              }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <Link
                href={item.href}
                className={cn("text-2xl font-medium text-gray-400", {
                  "text-fuchsia-400": pathname === item.href,
                })}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium text-gray-400 transition-colors hover:text-fuchsia-400",
                  {
                    "text-fuchsia-400": pathname === item.href,
                  },
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="z-50 md:hidden"
          onClick={handleMenuToggle}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? (
            <HiOutlineXMark className="size-6 stroke-gray-400" />
          ) : (
            <HiBars2 className="size-6 stroke-gray-400" />
          )}
        </button>
      </Wrapper>
    </header>
  );
}
