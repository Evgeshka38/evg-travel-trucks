import CamperList from '@/components/pages/catalog-page/CamperList/CamperList';
import Filters from '@/components/pages/catalog-page/Filters/Filters';

import css from './CatalogPage.module.css';

export default function CatalogPage() {
  return (
    <section className={css.catalog}>
      <div className={css.container}>
        <Filters />

        <div className={css.content}>
          <CamperList />
        </div>
      </div>
    </section>
  );
}