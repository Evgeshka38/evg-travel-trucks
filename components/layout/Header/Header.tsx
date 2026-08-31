'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import css from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isCatalog = pathname.startsWith('/catalog');

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link
          href="/"
          className={css.logo}
          aria-label="TravelTrucks home"
        >
          <Image
            src="/logo-header.svg"
            alt="TravelTrucks"
            width={136}
            height={16}
            priority
          />
        </Link>

        <nav
          className={css.nav}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className={`${css.navLink} ${
              isHome ? css.active : ''
            }`}
          >
            Home
          </Link>

          <Link
            href="/catalog"
            className={`${css.navLink} ${
              isCatalog ? css.active : ''
            }`}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}