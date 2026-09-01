import { FaStar } from 'react-icons/fa';

import type { CamperReview } from '@/types/camper';

import css from './Reviews.module.css';

type ReviewsProps = {
  reviews: CamperReview[];
};

export default function Reviews({
  reviews,
}: ReviewsProps) {
  return (
    <section className={css.reviews}>
      <h2 className={css.title}>
        Reviews
      </h2>

      {reviews.length === 0 ? (
        <p className={css.empty}>
          No reviews yet.
        </p>
      ) : (
        <ul className={css.list}>
          {reviews.map((review) => {
            const initial =
              review.reviewer_name
                .trim()
                .charAt(0)
                .toUpperCase();

            return (
              <li
                key={review.id}
                className={css.item}
              >
                <div className={css.header}>
                  <div
                    className={css.avatar}
                    aria-hidden="true"
                  >
                    {initial}
                  </div>

                  <div>
                    <p className={css.name}>
                      {review.reviewer_name}
                    </p>

                    <div
                      className={css.rating}
                      aria-label={`Rating: ${review.reviewer_rating} out of 5`}
                    >
                      {Array.from(
                        { length: 5 },
                        (_, index) => {
                          const starNumber =
                            index + 1;

                          const isActive =
                            starNumber <=
                            review.reviewer_rating;

                          return (
                            <FaStar
                              key={starNumber}
                              className={
                                isActive
                                  ? css.starActive
                                  : css.starInactive
                              }
                              aria-hidden="true"
                            />
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>

                <p className={css.comment}>
                  {review.comment}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}