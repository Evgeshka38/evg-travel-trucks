'use client';

import { useState } from 'react';

import type { CampersFilters } from '@/lib/api/campersApi';

import Filters from '../Filters/Filters';
import CamperList from '../CamperList/CamperList';

import css from './CatalogContent.module.css';

export default function CatalogContent() {
  const [filters, setFilters] =
    useState<CampersFilters>({});

  return (
    <div className={css.container}>
      <Filters
        onSearch={setFilters}
      />

      <div className={css.content}>
        <CamperList
          filters={filters}
        />
      </div>
    </div>
  );
}