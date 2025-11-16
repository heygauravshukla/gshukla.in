"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AlignRight } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Bookmarks", href: "/bookmarks" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/avatar.jpg"
            alt="Gaurav Shukla's avatar"
            width={40}
            height={40}
            className="size-9 rounded-full"
          />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 sm:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-primary text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mode Toggle */}
          <ThemeToggle />

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger className="sm:hidden">
              <AlignRight className="size-5" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Browse navigation links</SheetDescription>
              </SheetHeader>

              <div className="px-6 py-20">
                <ul className="grid gap-3">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className={`text-xl ${
                            pathname === item.href
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
