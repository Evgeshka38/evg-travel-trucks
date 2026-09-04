import Link from 'next/link';

import css from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={css.main}>
      <h1 className={css.title}>
        Camper not found
      </h1>

      <p className={css.text}>
        The camper you are looking for does not exist.
      </p>

      <Link
        href="/catalog"
        className={css.link}
      >
        Back to catalog
      </Link>
    </main>
  );
}