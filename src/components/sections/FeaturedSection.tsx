import Header from "../ui/Header";
import ProductsPage from "@/app/products/page";
import CategoriesList from "../categories/CategoriesList";
import { Lang } from "@/types/lang";

type Props = {
  lang: Lang;
};

export const FeaturedSection = ({ lang }: Props) => (
  <section className="py-15 max-w-7xl mx-auto">
    <Header
      title={lang === "fa" ? "محصولات ویژه" : "Featured Products"}
      subtitle={
        lang === "fa"
          ? "محبوب‌ترین تجهیزات تکنولوژی"
          : "Discover our most popular tech gear"
      }
      variant="h2"
      align={lang === "fa" ? "right" : "left"}
    />

    <CategoriesList lang={lang} />

    <ProductsPage />
  </section>
);
