import { Suspense } from "react";
import { MorrowShop } from "@/components/demos/morrow/MorrowShop";

export const metadata = {
  title: "Shop",
};

export default function MorrowShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#141210]" />}>
      <MorrowShop />
    </Suspense>
  );
}
