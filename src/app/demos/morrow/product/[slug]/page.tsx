import { notFound } from "next/navigation";
import { getMorrowProduct, morrow } from "@/data/demos/morrow";
import { MorrowProductView } from "@/components/demos/morrow/MorrowProductView";

export function generateStaticParams() {
  return morrow.products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getMorrowProduct(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default function MorrowProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getMorrowProduct(params.slug);
  if (!product) notFound();
  return <MorrowProductView product={product} />;
}
