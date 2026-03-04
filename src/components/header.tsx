"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { EllipsisVertical, X } from "lucide-react";

import { cn } from "@/lib/utils";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Articles", href: "/articles" },
  { name: "Projects", href: "/projects" },
  { name: "Bookmarks", href: "/bookmarks" },
  { name: "Contact", href: "mailto:heygauravshukla@gmail.com" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/95 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/85">
      <div className="container flex h-16 items-center justify-between gap-4 md:h-18">
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage" className="shrink-0">
          <Image
            src="/avatar.jpg"
            alt="Gaurav Shukla's avatar"
            width={40}
            height={40}
            className="size-9 rounded-full object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-6 max-md:hidden">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("text-sm font-medium transition-colors", {
                "text-teal-500 dark:text-teal-400": pathname === item.href,
                "hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400":
                  pathname !== item.href,
              })}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggler */}
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="z-50 md:hidden"
        >
          {isMenuOpen ? (
            <X className="size-4" />
          ) : (
            <EllipsisVertical className="size-4" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 z-40 min-h-dvh items-center gap-4 bg-zinc-50 dark:bg-zinc-950",
            {
              "grid md:hidden": isMenuOpen,
              hidden: !isMenuOpen,
            },
          )}
        >
          <nav className="grid place-items-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn("text-2xl font-medium transition-colors", {
                  "text-teal-500 dark:text-teal-400": pathname === item.href,
                  "hover:text-teal-500 dark:hover:text-teal-400":
                    pathname !== item.href,
                })}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
