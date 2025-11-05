import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/types/products";

export const FeaturedSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <h2 className="text-3xl font-medium mb-12 text-center">
      Featured Products
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);
