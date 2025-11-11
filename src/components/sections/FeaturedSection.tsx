// import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/types/products";
import ProductCard from "../product/ProductCard";

export const FeaturedSection = () => (
  <section className="py-24 max-w-7xl mx-auto">
    <h2 className="text-3xl font-medium mb-12 text-center">
      Featured Products
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);
