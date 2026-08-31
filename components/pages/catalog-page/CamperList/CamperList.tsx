import CamperCard from '../CamperCard/CamperCard';

import css from './CamperList.module.css';

export default function CamperList() {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        <li>
          <CamperCard />
        </li>

        <li>
          <CamperCard />
        </li>

        <li>
          <CamperCard />
        </li>

        <li>
          <CamperCard />
        </li>
      </ul>

      <button
        type="button"
        className={css.loadMore}
      >
        Load more
      </button>
    </div>
  );
}