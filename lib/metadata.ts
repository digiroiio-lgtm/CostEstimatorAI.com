import type { Metadata } from "next";
import {
  DEFAULT_OG_IMAGE,
  LOCALE,
  SITE_NAME,
  SITE_ORIGIN,
  absoluteUrl,
} from "@/lib/site-config";

type MetadataInput = {
  path: string;
  title: string;
  description: string;
  /** Set for pages that should not be indexed (e.g. /domain). */
  noindex?: boolean;
  type?: "website" | "article";
};

/** Default metadata applied by the root layout. */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_ORIGIN }],
  formatDetection: { telephone: false, email: false, address: false },
};

/**
 * Builds the full per-page metadata: title, description, canonical,
 * Open Graph, Twitter and robots. Titles are absolute (no template).
 */
export function buildMetadata({
  path,
  title,
  description,
  noindex = false,
  type = "website",
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const image = { ...DEFAULT_OG_IMAGE, url: absoluteUrl(DEFAULT_OG_IMAGE.url) };

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      locale: LOCALE,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}
