import CatalogContent from '@/components/pages/catalog-page/CatalogContent/CatalogContent';

import css from './CatalogPage.module.css';

export default function CatalogPage() {
  return (
    <section className={css.catalog}>
      <CatalogContent />
    </section>
  );
}