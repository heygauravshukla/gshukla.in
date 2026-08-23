import Image from "next/image";
import Link from "next/link";

import { Drawer } from "@base-ui/react/drawer";
import { Menu, SquareArrowOutUpRight, X } from "lucide-react";
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
    <header className="sticky inset-y-0 top-0 z-50 bg-white py-4 md:py-6 dark:bg-neutral-950">
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

        <nav className="flex items-center gap-6">
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
          <Drawer.Root>
            <Drawer.Trigger className="md:hidden" aria-label="Open menu">
              <Menu className="size-4" />
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Backdrop className="fixed inset-0 z-50 bg-black/20 opacity-[calc(1-var(--drawer-swipe-progress))] transition-opacity duration-300 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0 dark:bg-black/60" />
              <Drawer.Viewport className="fixed inset-0 z-50 flex justify-end">
                <Drawer.Popup className="flex h-full w-72 max-w-[calc(100vw-3rem)] [transform:translateX(var(--drawer-swipe-movement-x))] flex-col bg-white shadow-xl transition-transform duration-300 ease-out outline-none data-ending-style:translate-x-full data-starting-style:translate-x-full dark:bg-neutral-900">
                  <Drawer.Content className="flex h-full flex-col p-6">
                    <div className="flex justify-end">
                      <Drawer.Close aria-label="Close menu">
                        <X className="size-4" />
                      </Drawer.Close>
                    </div>

                    <ul className="mt-10 grid gap-6">
                      {navigation.map((item) => (
                        <li key={item.label}>
                          <Drawer.Close
                            nativeButton={false}
                            render={
                              <Link
                                href={item.href}
                                className="text-2xl hover:underline"
                              >
                                {item.label}
                              </Link>
                            }
                          />
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6">
                      <Drawer.Close
                        nativeButton={false}
                        render={
                          <Link
                            href="mailto:heygauravshukla@gmail.com"
                            className="flex w-full items-center justify-center gap-2 rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                          >
                            Contact
                            <SquareArrowOutUpRight className="size-3.5" />
                          </Link>
                        }
                      />
                    </div>
                  </Drawer.Content>
                </Drawer.Popup>
              </Drawer.Viewport>
            </Drawer.Portal>
          </Drawer.Root>
        </nav>
      </div>
    </header>
  );
}
