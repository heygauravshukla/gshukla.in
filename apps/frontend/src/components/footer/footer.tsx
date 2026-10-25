import Link from "next/link";
import styles from "./footer.module.scss";

const legalPages = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact", href: "mailto:heygauravshukla@gmail.com" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>© {new Date().getFullYear()} Gaurav Shukla</p>

        <ul className={styles.links}>
          {legalPages.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={styles.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

