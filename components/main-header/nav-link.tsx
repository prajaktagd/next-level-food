"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./nav-link.module.css";

const NavLink = ({
  href,
  children,
}: Readonly<{ href: string; children: React.ReactNode }>) => {
  const path = usePathname();
  const classNames = path.startsWith(href)
    ? `${styles.link} ${styles.active}`
    : styles.link;

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
};

export default NavLink;
