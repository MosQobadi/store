// import CategoriesList from "@/components/categories/CategoriesList";

import CategoriesList from "@/components/categories/CategoriesList";
import { Lang } from "@/types/lang";

type Props = {
  lang: Lang;
};

const page = ({ lang }: Props) => {
  return (
    <div>
      <CategoriesList lang={lang} />
    </div>
  );
};

export default page;
