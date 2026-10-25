import Image from "next/image";
import Link from "next/link";
import { Drawer } from "@base-ui/react/drawer";
import { Menu, SquareArrowOutUpRight, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import styles from "./header.module.scss";

const navigation = [
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Bookmarks", href: "/bookmarks" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" aria-label="Home">
          <Image
            src="/avatar.jpg"
            alt="Gaurav's avatar"
            width={42}
            height={42}
            className={styles.avatar}
          />
        </Link>

        <nav className={styles.nav}>
          {/* Desktop nav */}
          <ul className={styles.desktopList}>
            {navigation.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.desktopLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          {/* Mobile nav */}
          <Drawer.Root>
            <Drawer.Trigger className={styles.drawerTrigger} aria-label="Open menu">
              <Menu className={styles.triggerIcon} />
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Backdrop className={styles.backdrop} />
              <Drawer.Viewport className={styles.viewport}>
                <Drawer.Popup className={styles.popup}>
                  <Drawer.Content className={styles.drawerContent}>
                    <div className={styles.closeWrapper}>
                      <Drawer.Close aria-label="Close menu" className={styles.closeButton}>
                        <X className={styles.closeIcon} />
                      </Drawer.Close>
                    </div>

                    <ul className={styles.drawerList}>
                      {navigation.map((item) => (
                        <li key={item.label}>
                          <Drawer.Close
                            nativeButton={false}
                            render={
                              <Link
                                href={item.href}
                                className={styles.drawerLink}
                              >
                                {item.label}
                              </Link>
                            }
                          />
                        </li>
                      ))}
                    </ul>

                    <div className={styles.drawerFooter}>
                      <Drawer.Close
                        nativeButton={false}
                        render={
                          <Link
                            href="mailto:heygauravshukla@gmail.com"
                            className={styles.contactButton}
                          >
                            Contact
                            <SquareArrowOutUpRight className={styles.contactIcon} />
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

