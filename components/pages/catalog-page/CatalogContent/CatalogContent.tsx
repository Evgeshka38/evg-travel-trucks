'use client';

import { useState } from 'react';

import type { CampersFilters } from '@/lib/api/campersApi';

import Filters from '../Filters/Filters';
import CamperList from '../CamperList/CamperList';

import css from './CatalogContent.module.css';

export default function CatalogContent() {
  const [filters, setFilters] =
    useState<CampersFilters>({});

  const [filtersResetKey, setFiltersResetKey] =
    useState(0);

  function handleSearch(
    newFilters: CampersFilters
  ) {
    setFilters(newFilters);
  }

  function handleClearAllFilters() {
    setFilters({});

    setFiltersResetKey(
      (previousKey) => previousKey + 1
    );
  }

  return (
    <div className={css.container}>
      <Filters
        key={filtersResetKey}
        onSearch={handleSearch}
      />

      <div className={css.content}>
        <CamperList
          filters={filters}
          onClearFilters={
            handleClearAllFilters
          }
        />
      </div>
    </div>
  );
}