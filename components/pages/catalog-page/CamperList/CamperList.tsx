"use client";

import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";

import Loader from "@/components/loader/Loader";

import { getCampers, type CampersFilters } from "@/lib/api/campersApi";

import CamperCard from "../CamperCard/CamperCard";

import css from "./CamperList.module.css";

import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";

type CamperListProps = {
  filters: CampersFilters;
  onClearFilters: () => void;
};

export default function CamperList({
  filters,
  onClearFilters,
}: CamperListProps) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isPending,
    isError,
  } = useInfiniteQuery({
    queryKey: ["campers", filters],

    queryFn: ({ pageParam }) =>
      getCampers({
        page: pageParam,
        perPage: 4,
        ...filters,
      }),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.totalPages) {
        return undefined;
      }

      return lastPage.page + 1;
    },

    placeholderData: keepPreviousData,
  });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  const showLoader = isPending || (isFetching && !isFetchingNextPage);

  if (isError) {
    return <p className={css.status}>Failed to load campers.</p>;
  }

  return (
    <>
      {showLoader && <Loader />}

      <div className={css.wrapper}>
        {campers.length === 0 && !isPending && !isFetching ? (
          <div className={css.emptyState}>
            <div className={css.emptyImage}>
              <Image
                src="/images/not-found.svg"
                alt="No campers found"
                width={320}
                height={240}
                className={css.notFoundImage}
              />
            </div>

            <h2 className={css.emptyTitle}>No campers found</h2>

            <p className={css.emptyText}>
              We couldn&apos;t find any campers that match your filters.
              <br />
              Try adjusting your search or clearing some filters.
            </p>

            <div className={css.emptyActions}>
              <button
                type="button"
                className={css.clearButton}
                onClick={onClearFilters}
              >
                <IoCloseOutline className={css.clearIcon} aria-hidden="true" />

                <span>Clear filters</span>
              </button>

              <button
                type="button"
                className={css.viewAllButton}
                onClick={onClearFilters}
              >
                View all campers
              </button>
            </div>
          </div>
        ) : (
          <>
            <ul className={css.list}>
              {campers.map((camper) => (
                <li key={camper.id}>
                  <CamperCard camper={camper} />
                </li>
              ))}
            </ul>

            {hasNextPage && (
              <button
                type="button"
                className={css.loadMore}
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                {isFetchingNextPage ? "Loading..." : "Load more"}
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
}
