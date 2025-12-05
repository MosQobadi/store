import Header from "../ui/Header";
import ProductsPage from "@/app/products/page";
import CategoriesList from "../categories/CategoriesList";

export const FeaturedSection = () => (
  <section className="py-15 max-w-7xl mx-auto">
    <Header
      title="Featured Products"
      subtitle="Discover our most popular tech gear, handpicked for creators."
      variant="h2"
      align="left"
    />
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <CategoriesList />
    </div>
    <ProductsPage />
  </section>
);
