import Link from "next/link";
import type { ReactNode } from "react";
import { getSaleUrl, isSaleUrlExternal } from "@/lib/site-config";

type Props = { className?: string; children: ReactNode };

/** Link to the configured sale/contact URL, or to /domain when none is set. */
export function SaleLink({ className, children }: Props) {
  const href = getSaleUrl();
  if (isSaleUrlExternal()) {
    return (
      <a href={href} className={className} rel="noopener">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
