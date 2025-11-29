import ProductsList from "@/components/product/ProductsList";

export const metadata = {
  title: "Products | Store",
  description: "Browse all products",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-10">
      <ProductsList />
    </div>
  );
}
