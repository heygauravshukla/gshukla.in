import Link from "next/link";

const legalPages = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact", href: "mailto:heygauravshukla@gmail.com" },
];

export function Footer() {
  return (
    <footer className="py-4 md:py-6">
      <div className="container flex items-center justify-between gap-2 text-sm max-sm:flex-col">
        <p>© {new Date().getFullYear()} Gaurav Shukla</p>

        <ul className="flex items-center gap-4">
          {legalPages.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
