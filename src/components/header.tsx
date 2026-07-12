import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, SquareArrowOutUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Bookmarks", href: "/bookmarks" },
  { label: "Socials", href: "/socials" },
];

export function Header() {
  return (
    <header className="bg-background sticky inset-y-0 top-0 z-50 py-4 md:py-6">
      <div className="container flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Image
            src="/avatar.jpg"
            alt="Gaurav's avatar"
            width={42}
            height={42}
            className="size-10 min-w-fit rounded-full object-cover"
          />
        </Link>

        <nav className="flex items-center gap-3">
          {/* Desktop nav */}
          <ul className="flex items-center gap-5 max-md:hidden">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          {/* Mobile nav */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <span className="sr-only">Menu</span>
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent>
              <ul className="mt-16 grid gap-5 p-6">
                {navigation.map((item) => (
                  <SheetClose
                    key={item.label}
                    nativeButton={false}
                    render={
                      <li>
                        <Link href={item.href} className="text-2xl">
                          {item.label}
                        </Link>
                      </li>
                    }
                  ></SheetClose>
                ))}
              </ul>
              <SheetFooter>
                <Link
                  href="mailto:heygauravshukla@gmail.com"
                  className={buttonVariants({
                    size: "lg",
                  })}
                >
                  Contact
                  <SquareArrowOutUpRight data-icon="inline-end" />
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
