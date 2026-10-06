"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type KeyboardEvent } from "react";
import type { NavItem } from "@/lib/site-config";

type Props = {
  items: NavItem[];
  saleHref: string;
  saleExternal: boolean;
  saleLabel: string;
};

/**
 * Primary navigation. Desktop shows inline links; mobile shows a toggle button
 * and a panel. The panel closes automatically when the route changes.
 */
export function SiteNav({ items, saleHref, saleExternal, saleLabel }: Props) {
  const pathname = usePathname();
  // Remember the path the menu was opened on; navigating elsewhere closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  const closeOnEscape = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") setOpenOn(null);
  };

  const linkClass = (href: string) =>
    `site-nav__link${pathname === href ? " is-current" : ""}`;

  return (
    <>
      <nav className="site-nav" aria-label="Primary">
        <ul className="site-nav__list">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={linkClass(item.href)}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpenOn(open ? null : pathname)}
        onKeyDown={closeOnEscape}
      >
        <span className="menu-toggle__bars" aria-hidden="true" />
        <span className="menu-toggle__label">{open ? "Close" : "Menu"}</span>
      </button>

      <div
        id="mobile-menu"
        className="mobile-menu"
        hidden={!open}
        onKeyDown={closeOnEscape}
      >
        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={linkClass(item.href)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              {saleExternal ? (
                <a href={saleHref} className="mobile-menu__sale" rel="noopener">
                  {saleLabel}
                </a>
              ) : (
                <Link href={saleHref} className="mobile-menu__sale">
                  {saleLabel}
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
