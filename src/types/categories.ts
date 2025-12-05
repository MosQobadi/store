export interface Category {
  id: string; // UUID
  created_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp

  name_en: string;
  name_fa: string;

  slug_en: string;
  slug_fa: string;

  description_en: string;
  description_fa: string;

  seo_title_en: string;
  seo_title_fa: string;

  seo_description_en: string;
  seo_description_fa: string;

  image: string; // URL string
  is_active: boolean;

  parent_id: string | null; // UUID or null if top-level category
}
