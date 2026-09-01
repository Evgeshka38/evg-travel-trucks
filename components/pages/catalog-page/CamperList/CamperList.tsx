'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import {
  getCampers,
  type CampersFilters,
} from '@/lib/api/campersApi';

import CamperCard from '../CamperCard/CamperCard';

import css from './CamperList.module.css';

type CamperListProps = {
  filters: CampersFilters;
};

export default function CamperList({
  filters,
}: CamperListProps) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
  } = useInfiniteQuery({
    queryKey: [
      'campers',
      filters,
    ],

    queryFn: ({ pageParam }) =>
      getCampers({
        page: pageParam,
        perPage: 4,
        ...filters,
      }),

    initialPageParam: 1,

    getNextPageParam: (
      lastPage
    ) => {
      if (
        lastPage.page >=
        lastPage.totalPages
      ) {
        return undefined;
      }

      return lastPage.page + 1;
    },
  });

  if (isPending) {
    return (
      <p className={css.status}>
        Loading campers...
      </p>
    );
  }

  if (isError) {
    return (
      <p className={css.status}>
        Failed to load campers.
      </p>
    );
  }

  const campers =
    data.pages.flatMap(
      (page) => page.campers
    );

  if (campers.length === 0) {
    return (
      <p className={css.status}>
        No campers found.
      </p>
    );
  }

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {campers.map(
          (camper) => (
            <li key={camper.id}>
              <CamperCard
                camper={camper}
              />
            </li>
          )
        )}
      </ul>

      {hasNextPage && (
        <button
          type="button"
          className={
            css.loadMore
          }
          onClick={() =>
            fetchNextPage()
          }
          disabled={
            isFetchingNextPage
          }
        >
          {isFetchingNextPage
            ? 'Loading...'
            : 'Load more'}
        </button>
      )}
    </div>
  );
}