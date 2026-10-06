import { SaleLink } from "@/components/SaleLink";
import { SITE_NAME } from "@/lib/site-config";

/** Subtle end-of-page note for people building in the category. Not a service CTA. */
export function AssetNote({ category }: { category: string }) {
  return (
    <div className="container">
      <p className="asset-note">
        Building in {category}? {SITE_NAME} is available for acquisition.{" "}
        <SaleLink className="inline-cta">View domain details →</SaleLink>
      </p>
    </div>
  );
}
